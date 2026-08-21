import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from "../../store/slices/cartSlice";
import { Modal } from "../Modal/Modal";
import { CheckoutForm } from "./CheckoutForm";
import {
	CartTitle,
	CartEmptyState,
	CartList,
	CartRow,
	CartRowInfo,
	CartItemPrice,
	QtyControl,
	RemoveButton,
	CartFooter,
	CartTotalRow,
	PrimaryButton,
} from "./CartStyles";

interface CartDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const items = useAppSelector((state) => state.cart.items);
	const [view, setView] = useState<"cart" | "checkout">("cart");

	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
	const totalSum = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const handleClose = () => {
		onClose();

		setTimeout(() => setView("cart"), 300);
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose} $side ariaLabel={t("cart.title")}>
			{view === "checkout" ? (
				<CheckoutForm onBack={() => setView("cart")} onClose={handleClose} />
			) : (
				<>
					<CartTitle>{t("cart.title")}</CartTitle>
					{items.length === 0 ? (
						<CartEmptyState>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
								<circle cx="9" cy="21" r="1" />
								<circle cx="20" cy="21" r="1" />
								<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
							</svg>
							<p>{t("cart.empty")}</p>
						</CartEmptyState>
					) : (
						<>
							<CartList>
								{items.map((item) => (
									<CartRow key={item.id}>
										<img src={item.img} alt={item.title} />
										<CartRowInfo>
											<h4>{item.title}</h4>
											<QtyControl>
												<button
													type="button"
													aria-label={t("cart.decrease")}
													onClick={() => dispatch(decrementQuantity(item.id))}>
													-
												</button>
												<span>{item.quantity}</span>
												<button
													type="button"
													aria-label={t("cart.increase")}
													onClick={() => dispatch(incrementQuantity(item.id))}>
													+
												</button>
											</QtyControl>
										</CartRowInfo>
										<CartItemPrice>
											{t("cart.itemSum", {
												sum: item.price * item.quantity,
											})}
										</CartItemPrice>
										<RemoveButton
											type="button"
											onClick={() => dispatch(removeFromCart(item.id))}>
											{t("cart.remove")}
										</RemoveButton>
									</CartRow>
								))}
							</CartList>
							<CartFooter>
								<CartTotalRow>
									<span>{t("cart.itemsInCart")}</span>
									<strong>{totalItems}</strong>
								</CartTotalRow>
								<CartTotalRow $emphasis>
									<span>{t("cart.totalSum")}</span>
									<strong>{t("cart.itemSum", { sum: totalSum })}</strong>
								</CartTotalRow>
								<PrimaryButton type="button" onClick={() => setView("checkout")}>
									{t("cart.checkout")}
								</PrimaryButton>
							</CartFooter>
						</>
					)}
				</>
			)}
		</Modal>
	);
};
