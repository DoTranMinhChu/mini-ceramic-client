import { createSlice } from '@reduxjs/toolkit';


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        information: null,
        logged: false,
    }
    ,
    reducers: {
        setInformation: (state, action) => {
            state.information = action.payload.data;
        },
        setLogged: (state, action) => {
            state.logged = action.payload.data;
        },
    }
})

export default usersSlice.reducer;
export const { setInformation, setLogged } = usersSlice.actions
