import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Overlay, ModalPanel, CloseButton } from "./ModalStyles";
import { pauseSmoothScroll, resumeSmoothScroll } from "../../lib/smoothScroll";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;

	$side?: boolean;
	ariaLabel?: string;
}

export const Modal = ({ isOpen, onClose, children, $side, ariaLabel }: ModalProps) => {
	const { t } = useTranslation();
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		pauseSmoothScroll();

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = previousOverflow;
			resumeSmoothScroll();
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<Overlay onMouseDown={onClose}>
			<ModalPanel
				$side={$side}
				role="dialog"
				aria-modal="true"
				aria-label={ariaLabel}
				onMouseDown={(e) => e.stopPropagation()}>
				<CloseButton type="button" aria-label={t("cart.close")} onClick={onClose}>
					×
				</CloseButton>
				{children}
			</ModalPanel>
		</Overlay>,
		document.body,
	);
};
