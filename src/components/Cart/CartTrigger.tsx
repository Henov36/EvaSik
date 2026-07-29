import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
import { CartDrawer } from "./CartDrawer";
import { CartTriggerButton, CartBadge } from "./CartStyles";
import AnimCard from "../../assets/animCardColor.json";
import { useRef,useEffect } from "react";
import { Player } from "@lordicon/react";

export const CartTrigger = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const playerRef = useRef<Player>(null);
	const totalItems = useAppSelector((state) =>
		state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
	);
	
	useEffect(() => {
		playerRef.current?.playFromBeginning();
	}, []);

	return (
		<>
			<CartTriggerButton
				type="button"
				aria-label={t("cart.title")}
				onClick={() => setIsOpen(true)}>
				<Player
					ref={playerRef}
					icon={AnimCard}
					onComplete={() => {
						setTimeout(() => {
							playerRef.current?.playFromBeginning();
						}, 2000);
					}}
					size={32}
				/>
				{totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
			</CartTriggerButton>
			<CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
};
