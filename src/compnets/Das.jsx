import React, { useContext, useEffect, useState } from 'react'

import DasChild from './DasChild'
import { DataContext } from '../Datatransfer'

export default function Das() {
  const {storData,setStorData} = useContext(DataContext)
  
  

  let [prices,setPrices] = useState(0)

  useEffect(()=>{
   let total = storData.reduce((t,iteam)=> t + iteam.price ,0)
   setPrices(total)
  },[storData])

  

  let title = 'Dashboard'
  let para = 'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
return (
  <div>
    <div className='w-11/12 h-[463px] mx-auto text-center bg-[#9538E2]'>
      <h1 className='text-3xl text-white font-bold mt-2 mb-2'>{title}</h1>
      <p className='text-white w-3/4 mx-auto '>{para}</p>
      <button className='bg-white rounded-full p-3 text-[#9538E2]'>Cart</button>
      <button className='bg-[#9538E2] rounded-full p-3 text-white'>Wishlist</button>

      </div>

      <div className='w-11/12 mx-auto'>
        <div className='flex justify-between items-center p-3'>

        
        <div className='text-2xl font-bold'><h1>Cart</h1></div>
        <div className='flex gap-3 justify-center items-center'>
          <p className='text-xl font-bold'>Total cost:{prices}</p>
          <button className='btn rounded-full bg-white text-[#9538E2]'>Sort by Price <img src="https://i.ibb.co.com/M5Wwp3p/classical.png" className='w-5 h-5' alt="" /></button>
          <button className='btn rounded-full bg-[#9538E2] text-white'>Purchase</button>
        </div>
        </div>

        {
          storData.map(x => <DasChild x={x}></DasChild>)
        }
        

      </div>
  </div>
)
}
