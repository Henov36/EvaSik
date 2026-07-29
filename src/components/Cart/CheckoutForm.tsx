import { useRef, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjsConfig";
import {
	CartTitle,
	FormField,
	PrimaryButton,
	SecondaryButton,
	SuccessState,
	ErrorText,
} from "./CartStyles";

interface CheckoutFormProps {
	onBack: () => void;
	onClose: () => void;
}

type Status = "idle" | "sending" | "success" | "error";

/**
 * Форма оформлення замовлення, підключена до EmailJS (@emailjs/browser).
 * Service ID / Template ID / Public Key — плейсхолдери в
 * src/lib/emailjsConfig.ts, підстав туди реальні значення з кабінету
 * emailjs.com, і форма запрацює без будь-яких інших змін коду.
 *
 * Очікувані поля в EmailJS-шаблоні: {{name}}, {{phone}}, {{message}}.
 */
export const CheckoutForm = ({ onBack, onClose }: CheckoutFormProps) => {
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<Status>("idle");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) return;

		setStatus("sending");

		try {
			await emailjs.sendForm(
				EMAILJS_CONFIG.serviceId,
				EMAILJS_CONFIG.templateId,
				formRef.current,
				{ publicKey: EMAILJS_CONFIG.publicKey },
			);
			setStatus("success");
		} catch (error) {
			console.error("EmailJS send failed:", error);
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<SuccessState>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="12" cy="12" r="10" />
					<path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<h3>{t("cart.thankYouTitle")}</h3>
				<p>{t("cart.thankYouText")}</p>
				<SecondaryButton type="button" onClick={onClose}>
					{t("cart.close")}
				</SecondaryButton>
			</SuccessState>
		);
	}

	return (
		<div>
			<CartTitle>{t("cart.checkoutTitle")}</CartTitle>
			<form ref={formRef} onSubmit={handleSubmit}>
				<FormField>
					{t("cart.name")}
					<input type="text" name="name" required placeholder={t("cart.namePlaceholder") ?? ""} />
				</FormField>
				<FormField>
					{t("cart.phone")}
					<input type="tel" name="phone" required placeholder={t("cart.phonePlaceholder") ?? ""} />
				</FormField>
				<FormField>
					{t("cart.comment")}
					<textarea
						name="message"
						rows={3}
						placeholder={t("cart.commentPlaceholder") ?? ""}
					/>
				</FormField>
				<PrimaryButton type="submit" disabled={status === "sending"}>
					{status === "sending" ? t("cart.sending") : t("cart.confirm")}
				</PrimaryButton>
				{status === "error" && <ErrorText>{t("cart.sendError")}</ErrorText>}
				<div style={{ marginTop: 10 }}>
					<SecondaryButton type="button" onClick={onBack}>
						{t("cart.back")}
					</SecondaryButton>
				</div>
			</form>
		</div>
	);
};
