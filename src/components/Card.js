import React, { useEffect, useRef, useState } from 'react';
import { useCartDispatch, useCartState } from './ContextReducer';

const Card = (props) => {
  let dispatch = useCartDispatch();
  let data = useCartState();
  const priceRef =useRef();
  let options = props.options;
  let prizeOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
    console.log(data);
  }
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
 let finalPrice = qty * parseInt(options[size]);
  return (
    <div>
      <div>
        <div className="card mt-3 mx" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "140px", objectFit: "fill" }} />
          <div className="card-body bg-color bg-dark">
            <h5 className="card-title text-white ">{props.foodItem.name}</h5>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded accordion-collapse text-white' onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded text-white' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {prizeOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className='d-inline h-100 fs-5 text-white'>
              ₹{finalPrice}/-
              </div>
            </div>

            <hr />
            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
