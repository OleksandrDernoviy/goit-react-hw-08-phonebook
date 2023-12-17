
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        actionFilter(state, action) {
            // console.log(action.payload);
            return action.payload
        }
    }
})

export const { actionFilter } = filterSlice.actions


