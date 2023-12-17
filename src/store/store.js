
import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import { contactsSlice } from './contactSlice'
import { filterSlice }  from './filterSlice'



// export const store = configureStore({
//   reducer: reducer,
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });


export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});