import { createSlice } from "@reduxjs/toolkit";

const initialState : Array<object> =  []
export const ShopFavoriteSlice = createSlice({
    name: `ShopFavorite`,
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: goods}) =>{
    
            
            const isExist = state.some((r) => r.id === goods.id)
            if (isExist) {
             const index = state.findIndex((item ) => item.id === goods.id)
        
                if (index !== -1) {
                    state.splice(index, 1)
                }
        
            }else{
                
                state.push(goods)
               
            }
  
         
        }
    }
})

export const {actions, reducer } = ShopFavoriteSlice