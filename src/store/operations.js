

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657b6c71394ca9e4af1454ca.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/contacts');
      // console.log(response.data);
      return response.data;
            
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contacts, thunkAPI) => {
    try {
      const response = await axios.post('/contacts/contacts',contacts);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


 