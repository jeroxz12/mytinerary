import { configureStore } from '@reduxjs/toolkit'
import { citySlice } from './slices/citySlice'
export const store = configureStore({
  reducer: {
    cities: citySlice.reducer
  },
})