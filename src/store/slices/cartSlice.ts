import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../data/products";

export interface CartItem {
	id: number;
	title: string;
	img: string;
	category: string;
	slug: string;
	quantity: number;
}

interface CartState {
	items: CartItem[];
}

const CART_STORAGE_KEY = "cart";

const readInitialCart = (): CartItem[] => {
	try {
		const raw = localStorage.getItem(CART_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};

const persist = (items: CartItem[]) => {
	try {
		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
	} catch {
		// localStorage может быть недоступен (приватный режим и т.п.) —
		// корзина в этом случае просто не переживёт перезагрузку страницы.
	}
};

const initialState: CartState = {
	items: readInitialCart(),
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (
			state,
			action: PayloadAction<{ product: Product; quantity?: number }>,
		) => {
			const { product, quantity = 1 } = action.payload;
			const existing = state.items.find((item) => item.id === product.id);

			if (existing) {
				existing.quantity += quantity;
			} else {
				state.items.push({
					id: product.id,
					title: product.title,
					img: product.img,
					category: product.category,
					slug: product.slug,
					quantity,
				});
			}
			persist(state.items);
		},
		incrementQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((i) => i.id === action.payload);
			if (item) item.quantity += 1;
			persist(state.items);
		},
		decrementQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((i) => i.id === action.payload);
			if (item) {
				item.quantity = Math.max(1, item.quantity - 1);
			}
			persist(state.items);
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
			persist(state.items);
		},
		clearCart: (state) => {
			state.items = [];
			persist(state.items);
		},
	},
});

export const {
	addToCart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
