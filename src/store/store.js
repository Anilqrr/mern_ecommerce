import {configureStore} from '@reduxjs/toolkit'
import ReducerProduct from '../reducers_actions/reducer_action'
const store = configureStore({
    reducer:{
        product:ReducerProduct
    }
})

export default store;