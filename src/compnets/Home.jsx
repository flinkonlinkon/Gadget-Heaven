import React, { useContext } from 'react'
import Card from '../Card'
import { ConTax } from '../App'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const data = useContext(ConTax) 
  const navigate = useNavigate()

  function catagoryBtn(value){
    console.log(value);
    
  }

  return (
    <>
    <div className='bg-[#9538E2] justify-center flex flex-col h-[694px] rounded-lg mx-auto w-11/12'>
      <p className='font-bold text-6xl w-3/4 mx-auto text-center text-white mt-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
      <p className='w-8/12 mx-auto text-center text-white mt-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className='btn bg-white rounded-full mx-auto mt-16 mb-16'>Shope Now</button>
    </div>
    <div className='w-2/3 mx-auto h-[611px] p-3 rounded-lg relative top-[-202px]'>
    <img className='rounded-lg' src="https://i.ibb.co.com/JmmM1Ps/banner.jpg" alt="" />

    </div>

    <div className='w-11/12 mx-auto mt-7 mb-2'> 
    <p className='text-2xl font-bold text-center'>Explore Cutting-Edge Gadgets</p>

    <div className='flex gap-3'>

     <div className='w-[240px] rounded-xl flex flex-col items-center bg-white h-[556px] shadow-xl p-3'>
      
<button onClick={()=>navigate('/')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>All Product</button>

<button onClick={()=>navigate('/phones')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>Phones</button>

<button onClick={()=>navigate('/laptop')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>Laptops</button>

<button onClick={()=>navigate('pc')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>PC</button>

<button onClick={()=>navigate('watches')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>Smart Watches</button>

<button onClick={()=>navigate('accessories')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>Accessories</button>

<button onClick={()=>navigate('iphone')} className='mt-3 btn rounded-full bg-gray-200 text-[#9538E2] hover:bg-[#9538E2] hover:text-white mx-auto'>Iphone</button>
   
      
      
      
      
      

     </div>

     <div className='w-[1016px] grid grid-cols-1 md:grid-cols-3 gap-5'>

   <Outlet></Outlet>
        
      
      



     </div>

    </div>

    </div>
    </>
  )
}
