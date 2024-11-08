import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ConTax } from './App'

export default function Card({x}) {
  const data = useContext(ConTax)
  let {product_id,product_title,product_image,category,price,description,specification,availability,rating,brand,color,warranty} = x
  let navigate = useNavigate()
  function handleDetailesBtn(BtnData){
    console.log(BtnData);
    
  }
  
  
  return (
    <div className=''>
      <div className="card bg-base-100 w-[322.67px] h-[380px] shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt={product_title}
      className="rounded-xl w-[282px] h-[181px] object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">{product_title}</h2>
    <p>Price:${price}</p>
    <div className="card-actions">
      <Link to={`/details/${product_id}`}>
      <button onClick={()=> handleDetailesBtn(x)} className="btn btn-primary rounded-full bg-white text-[#9538E2]">View Details</button>
      </Link>
      
    </div>
  </div>
</div>
    </div>
  )
}
