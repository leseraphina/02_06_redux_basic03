import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name:'cart',
  initialState:{
    cartProductIds:[]
  },
  reducers:{
    addToCart(){},
    removeFromCart(){},
    clearAllItems(){}
  }
})

// addToCart:() =>{}

export let {addToCart,removeFromCart, clearAllItems} = cartSlice.actions;
export default cartSlice;