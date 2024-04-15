import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3000/');
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

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.error;
            });
    },
});

export default todoSlice.reducer;