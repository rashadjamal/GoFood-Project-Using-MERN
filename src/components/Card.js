import React from 'react';

const Card = (props) => {
    let options = props.options;
    let prizeOptions = Object.keys(options);
   const handleAddToCart = ()=>{
    
   }
    return (
        <div>
            <div>
                <div className="card mt-3 mx" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.imgSrc} className="card-img-top" alt="..."  style={{height:"140px",objectFit:"fill"}}/>
                    <div className="card-body bg-color bg-dark">
                        <h5 className="card-title text-white ">{props.foodName}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                {prizeOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5 text-white'>
                                Total Price
                            </div>
                        </div>
                        
                        <hr/>
                        <button className={'btn btn-success justify-center ms-2'}onClick={handleAddToCart}> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
