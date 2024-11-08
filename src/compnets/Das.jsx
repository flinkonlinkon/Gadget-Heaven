import React, { useContext, useEffect, useState } from 'react'

import DasChild from './DasChild'
import { DataContext } from '../Datatransfer'
import { useNavigate } from 'react-router-dom'

export default function Das() {
  const {storData,setStorData,priceShort} = useContext(DataContext)

  let navigate = useNavigate()
  
  

  let [prices,setPrices] = useState(0)

  useEffect(()=>{
   let total = storData.reduce((t,iteam)=> t + iteam.price ,0)
   let newTotal = Math.round(total)
   setPrices(newTotal)
  },[storData])

  

  

  let title = 'Dashboard'
  let para = 'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
return (
  <div>

    <div className='w-11/12 h-[300px] mx-auto text-center bg-[#9538E2]'>
      <h1 className='text-3xl text-white font-bold mt-3 mb-3'>{title}</h1>
      <p className='text-white w-3/4 mx-auto '>{para}</p>
      <button className='bg-white rounded-full p-3 text-[#9538E2] px-3'>Cart</button>
      <button className='bg-[#9538E2] rounded-full p-3 text-white'>Wishlist</button>

      </div>

      <div className='w-11/12 mx-auto'>
        <div className='flex justify-between items-center p-3'>

        
        <div className='text-2xl font-bold'><h1>Cart</h1></div>
        <div className='flex gap-3 justify-center items-center'>
          <p className='text-xl font-bold'>Total cost:{prices}</p>
          <button onClick={()=>priceShort()} className='btn rounded-full bg-white text-[#9538E2]'>Sort by Price <img src="https://i.ibb.co.com/M5Wwp3p/classical.png" className='w-5 h-5' alt="" /></button>
          <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='btn rounded-full bg-[#9538E2] text-white'>Purchase</button>
        </div>
        </div>

        {
          storData.map(x => <DasChild x={x}></DasChild>)
        }
        

      </div>
{/*  */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div><img className='w-14 mx-auto' src="https://i.ibb.co.com/w69Pyy3/success.png" alt="" /></div>
    <h3 className="font-bold text-lg text-center">Payment Successfully</h3>
    <p className="py-4 text-gray-500 text-center">Thanks for purchasing.</p>
    <p className="py-4 text-gray-500 text-center">Total:{prices}</p>
    <div className="modal-action mx-auto">
    <form method="dialog">
        
        <button onClick={()=>navigate('/')} className="w-96 text-center btn relative left-[-35px]">Close</button>
        </form>
    </div>
  </div>
</dialog>
      {/*  */}
  </div>
)
}
