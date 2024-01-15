import axios from 'axios'

export const fetchProducts = ()=>{
       return axios.get('http://localhost:3000')
}
export const AddProduct = (product)=>{
       return axios.post('http://localhost:3000/createproduct',product)
}
export const UpdateProduct =async (product,id)=>{
       // console.log(product)
       return await axios.put(`http://localhost:3000/updateproduct/${id}`,product)
}
export const getProduct = (id)=>{
       return axios.get(`http://localhost:3000/${id}`)
}