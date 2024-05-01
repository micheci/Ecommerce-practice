import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

export const addCartItems = createAsyncThunk('cart/fetchCartItems', async ({ userId, itemId }) => {
    const response = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, itemId }),
    });
    console.log(response, 'response');
    if (!response.ok) {
        throw new Error('Failed to fetch cart items');
    }

    return response.json();
});

interface InitialState {
    isLoading: boolean;
    data: unknown;
    error: SerializedError | null;
}

const initialState: InitialState = {
    isLoading: false,
    data: null,
    error: null
};

const CartSlice = createSlice({
    name: 'CartItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCartItems.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(addCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(addCartItems.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.error;
            });
    },
});

export default CartSlice.reducer;