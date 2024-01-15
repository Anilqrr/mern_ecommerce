import React, { useEffect,useState } from 'react'
import { ProductUpdate } from '../reducers_actions/reducer_action'
// import { Productget } from '../reducers_actions/reducer_action'
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
export default function Updateproduct() {
  const navigate = useNavigate()
  const [data, setData] = useState()
  // const [, setData] = useState()
   const {id} = useParams()
   console.log(id)
   const product = useSelector((state) => state.product.products);
  //  const find = product.findIndex((p)=>p.id===id)
  //  console.log(find)
  const dispatch =useDispatch();
  const handleChange = async (e)=>{
         setData({...data,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    if(id){
      const p = product.filter((p)=>p._id===id) 
      setData(p[0])
    }
    
  },[])
  // console.log(data)
  return (
    <div className="addproduct">
      <h1>Add Product</h1>
      <div className="box">
        <form>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="product"
              className="input"
              value={data && data.product}
              id="product"
              placeholder="Product Name..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="price"
              onChange={(e) => handleChange(e)}
              className="input"
              value={data && data.price}
              id="price"
              placeholder="Price $..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">
              <img src={data && data.image} alt="" />
            </label>
            <input
              type="file"
              name="image"
              onChange={
                async (e) => {
                  const file = e.target.files[0];
                  const base64 = await convertToBase64(file);
                  setData({...data,image:base64})
                }
               }
              accept=".jpg, .png, .jpeg"
              id="image"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              onChange={(e) => handleChange(e)}
              id="desc"
              value={data && data.description}
              cols="20"
              rows="10"
              placeholder="Description...."
            ></textarea>
          </div>
          <div className="form-group">
            <button type="button" 
            onClick={(e) => {
              e.preventDefault()
              dispatch(ProductUpdate(data))
             navigate('/admin')
            }
          }   >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}