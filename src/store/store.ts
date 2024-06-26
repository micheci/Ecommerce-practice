import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
import heroBannerReducer from "./heroBannerSlice"
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({reducer:{
    todo:todoReducer,
    heroBanner:heroBannerReducer,
    user:userReducer,
    cart:cartReducer
}});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;