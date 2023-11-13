import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [
        {id: 1, name: "Vasil"},
        {id: 2, name: "Max"},
        {id: 3, name: "Ira"},
    ]
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload.user;
            state.users.push(user);
        }
    }
});

const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;

export {userReducer};