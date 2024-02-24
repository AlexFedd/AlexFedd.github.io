import { createSlice } from '@reduxjs/toolkit';



const initialState = [
  {
    id: "0",
    name: "Alex",
  },
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Denis",
  },
];

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;
export const {} = userSlice.actions
export default userSlice.reducer;