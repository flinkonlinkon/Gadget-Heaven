import React, { useContext, useState } from 'react'
import { DataContext } from '../Datatransfer';

export default function DasChild({x}) {
  let {storData,setStorData,remove} = useContext(DataContext)
  let {product_id,product_title,product_image,category,price,description,specification,availability,rating,brand,color,warranty} = x
    console.log(typeof price);
    let [fprice,setFprice] = useState(0)

        function totalPrice(){

          // let newPrice = fprice + price
          setFprice(prevPrice => prevPrice + price);

    }

    console.log(fprice);
    
    
  return (
    <div className='mt-3 mb-3'>
      <div className='w-4/5 mx-auto rounded-lg flex p-3 shadow-lg h-[188px]'>

<div className='w-[200px] h-[124px]'>
  <img className='h-[150px]' src={product_image} alt="" />
</div>
<div className='flex flex-col gap-3'>
  <p className='text-xl font-bold'>{product_title}</p>
  <p className='text-gray-300'>{description}</p>
  <p className='font-bold'>price:${price}</p>
</div>

<button onClick={()=> remove(product_title)} className='btn rounded-full relative left-72'>
<img className='w-7 h-7' src="https://i.ibb.co.com/xhcSTDZ/delete-1.png" alt="" />
</button>


</div>
    </div>
  )
}
