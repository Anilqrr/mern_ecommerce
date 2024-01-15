import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAll } from "../reducers_actions/reducer_action";
import Image from "../assets/myimge.jpg";
export default function Products() {
  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAll());
  }, []);
  return (
    <main>
      <h1>Products</h1>
      <div className="container">
        {/* <button onClick={()=>dispatch(fetchProductAll())}>Click</button> */}

        {product.map((p) => {
         return <div className="box">
            <div className="img">
              <img src={p.image} alt="test" />
            </div>
            <div className="p-info">
              <div className="pr-info">
                <h4>{p.product}</h4>
                <h3>${p.price}</h3>
              </div>
              <p>
                {p.description}
              </p>
            </div>
            <div className="btn-btn">
              <button className="btn btn-b">Buy</button>
              <button className="btn btn-a">Add To Cart</button>
            </div>
          </div>;
        })}
        
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={Image} alt="test" />
          </div>
          <div className="p-info">
            <div className="pr-info">
              <h4>Product Name</h4>
              <h3>$444</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              alias similique natus, quaerat dolor ipsum. Expedita nam officia
              rem sit dolorem? Fugiat quis eveniet saepe aut ut, sed voluptates
              suscipit.
            </p>
          </div>
          <div className="btn-btn">
            <button className="btn btn-b">Buy</button>
            <button className="btn btn-a">Add To Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
