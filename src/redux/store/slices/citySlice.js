import { createSlice } from '@reduxjs/toolkit';
export const citySlice = createSlice({
   name: 'cities',
   initialState: {
       data:  [],
       counter: 0,
       cityFound: {},
       itineraryToLike: {}
   },
    reducers: {
        setCities: (state, action) => { 
            state.data = action.payload
            console.log(state.data)
        }, 
        increment: (state) => {
            state.counter += 1},
        filterOneCityById: (state,action) => {
            state.cityFound = state.data.find(city => city._id === action.payload);
        }, likeItinerary: (state, action) => {
           
        } 
    }
});
export const { setCities,filterOneCityById, likeItinerary } = citySlice.actions;
