import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { UserInfo } from '../Interfaces/user';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token: string) => {
  console.log('inslice')
    const response = await fetch('http://localhost:3000/user', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  console.log(data, 'data');
  return data[0];
});


interface InitialState {
    isLoading: boolean;
    data: UserInfo | null;
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
    reducers: {},
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

export default UserSlice.reducer;