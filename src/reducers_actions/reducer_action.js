import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts,AddProduct,UpdateProduct, getProduct } from "./productApi";
const initialState = {
    products: [],
    status:"idle"
}
export const fetchProductAll = createAsyncThunk(
    'products/fetchallproducts',
    async ()=>{
        const response = await fetchProducts();
        return response.data
    }
)
export const ProductAdd = createAsyncThunk(
    'products/addproduct',
    async (products)=>{
       const {product, price, image, description} = products
        const response = await AddProduct({...products,product:product,price:price,image:image, description:description});
        return response.data
    }
)
export const ProductUpdate = createAsyncThunk(
    'products/updateproduct',
    async (products)=>{
        console.log(products)
       const {product,price, image, description,_id} = products
        const response = await UpdateProduct({
            product, price, image, description
        },_id);
        console.log(response.data)
        return response.data
    }
)
export const ProductReducer = createSlice({
    name:"products",
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProductAll.pending,(state)=>{
            state.status = "pending";
            state.products
        })
        .addCase(fetchProductAll.fulfilled,(state,action)=>{
            state.status = "idle";
            state.products = action.payload;
        })
        .addCase(fetchProductAll.rejected,(state)=>{
            state.status = "reject";
            state.products
        })
        .addCase(ProductAdd.fulfilled,(state,action)=>{
            state.status = "idle";
            state.products += action.payload;
            
        })
        .addCase(ProductUpdate.fulfilled,(state,action)=>{
            state.status = "idle";
            // state.products += action.payload;
            state.products = state.products.map((e)=>(
                e._id===action.payload._id?action.payload:e
            ))
        })
    }
})

export const {} = ProductReducer.actions
export default ProductReducer.reducer