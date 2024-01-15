import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductAdd } from "../reducers_actions/reducer_action";
import Image from "../assets/myimge.jpg";
export default function AddProduct() {
  const [data, setProduct] = useState({
    product: "",
    price: "",
    image: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleChange = useCallback(
   (e) => {
      setProduct({ ...data, [e.target.name]: e.target.value });
      console.log(data);
    }
  )
  // const handleChange = (e) => {
  //   setProduct({ ...data, [e.target.name]: e.target.value });
  //   console.log(data);
  // };
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
              id="price"
              placeholder="Price $..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">
              <img src={Image} alt="" />
            </label>
            <input
              type="file"
              name="image"
              onChange={
                async (e) => {
                  const file = e.target.files[0];
                  const base64 = await convertToBase64(file);
                  setProduct({...data,image:base64})
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
              cols="20"
              rows="10"
              placeholder="Description...."
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" onClick={(e) => {
              e.preventDefault()
              dispatch(ProductAdd(data))}}>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
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
