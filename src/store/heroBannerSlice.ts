import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

export const fetchHeroBanner = createAsyncThunk('heroBanner/fetchHeroBanner', async () => {
    const response = await fetch('http://localhost:3000/getHeroBanner');
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

const HeroBannerSlice = createSlice({
    name: 'HeroBanner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroBanner.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(fetchHeroBanner.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchHeroBanner.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.error;
            });
    },
});

export default HeroBannerSlice.reducer;