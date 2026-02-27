import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = import.meta.env.VITE_URL
const path = import.meta.env.VITE_PATH

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.carts = action.payload
        state.loading = false
      })
      .addCase(getCartAsync.rejected, (state) => {
        state.loading = false
      })
  },
})

export const getCartAsync = createAsyncThunk(
  'cart/getCartAsync',
  async () => {
    const res = await axios.get(
      `${url}/api/${path}/cart`,
    )
    return res.data.data.carts
  },
)

export default cartSlice.reducer
