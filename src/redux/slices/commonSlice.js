import { createSlice } from '@reduxjs/toolkit';


const commonSlice = createSlice({
    name: 'commonSlice',
    initialState: {
        loading: false
    }
    ,
    reducers: {
        setLoading: (state, action) => {
            console.log(action.payload)
            state.loading = action.payload;
        },

    }
})

export default commonSlice.reducer;
export const { setLoading } = commonSlice.actions
