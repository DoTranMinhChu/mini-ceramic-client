import { createSlice } from '@reduxjs/toolkit';


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
    }
    ,
    reducers: {
        setInformation: (state, action) => {
            state.information = action.payload;
        },
        setLogged: (state, action) => {
            state.logged = action.payload;
        },
    }
})

export default usersSlice.reducer;
export const { setInformation, setLogged } = usersSlice.actions
