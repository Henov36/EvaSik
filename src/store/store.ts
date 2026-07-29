import {
	configureStore,
	type ThunkAction,
	type Action,
} from "@reduxjs/toolkit";
import localeSlice from "./slices/langSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
	reducer: {
		locale: localeSlice,
		cart: cartSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
