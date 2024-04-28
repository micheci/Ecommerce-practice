import { createSlice, createAsyncThunk, SerializedError, PayloadAction } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token: string) => {
  console.log('inslice')
    const response = await fetch('http://localhost:3000/user', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  console.log(data, 'data');
  return data;
});

interface User {
    name: string;
    address: string;
  }

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

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {setUserInfo: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.isLoading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.error;
            });
    },
});
export const { setUserInfo } = UserSlice.actions;

export default UserSlice.reducer;