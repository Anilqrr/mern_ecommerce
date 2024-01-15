import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductAll } from "../reducers_actions/reducer_action";
export default function Admin() {
  const {products, status}= useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProductAll())
  },[])
  return (
    <div className="admin">
      <div className="btn-add">
        <Link to="/addproduct">
          <button type="button"className="btn-btn-add">
            Add New
          </button>
        </Link>
      </div>
      <div className="box">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Products</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {status === "reject"?<p>error</p>:
            products.map((p) => {
              return (
                <tr key={p._id}>
                  <th>1</th>
                  <td>{p.product}</td>
                  <td>${p.price}</td>
                  <td><img src={p.image} alt="" height='50px'/></td>
                  <td>{p.description}</td>
                  <td><Link to='/deleteproduct'><button type="button" className="btn-d">Delete</button></Link>
                  <Link to={`/updateproduct/${p._id}`}><button type="button" className="btn-u">Update</button></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
