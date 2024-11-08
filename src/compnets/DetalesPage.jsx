
import { useLoaderData, useParams } from 'react-router-dom'

import { useContext } from 'react';
import { DataContext } from '../Datatransfer';
import { toast } from 'react-toastify';


export default function DetalesPage() {
 
    let {id} = useParams()
    let data = useLoaderData()
    console.log(id);
    const fnd = data.find(x => x.product_id == id)
    let {product_id,product_title,product_image,category,price,description,specification,availability,rating,brand,color,warranty} = fnd
    const {storData,setStorData} = useContext(DataContext)
    console.log(storData);
    
    function btnData(da){
  
      let newData = [...storData,fnd]
      setStorData(newData)
      console.log(newData);
      const notify = () => toast.success('Successfully Added', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      notify()

      
      
  
    }
    function btnData2(da){
  
      let newData = [...storData,fnd]
      setStorData(newData)
      console.log(newData);

      
      
  
    }
    const dataCon = storData
    console.log(storData);
    

    

    let title = 'Product Details'
    
    let para = 'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'

  return (
   
    <div className='gap-y-3  p-3 shadow-lg'>
      
      
       
      <div className='w-11/12 h-[463px] mx-auto text-center bg-[#9538E2]'>
      <h1 className='text-3xl text-white font-bold mt-5 mb-2'>{title}</h1>
      <p className='text-white w-3/4 mx-auto mt-3'>{para}</p>

      </div>

      <div className='w-2/3 relative top-[-300px] flex gap-3 z-50 bg-white mx-auto rounded-xl shadow-xl p-3'>
      <div className='w-[424px] h-[503px]'>
        <img src={product_image} alt="" className='object-cover'/>

      </div>
      <div>
        <p className='text-3xl font-bold mb-3'>{product_title}</p>
        <p className='text-xl font-bold mb-3'>price: $ {price}</p>
        <button className='btn rounded-full bg-gray-300 text-[#309C08] mb-3'>{availability ? 'In Stock' : 'Out Of Stock'}</button>
        <p className='text-[#309C08]'>{description}</p>
        <p className='mt-3 mb-3'><span className='text-xl font-bold'>Specification:</span> 
            {
                specification.map(pro => <p className='text-[#309C08] gap-2'>{pro}</p>)
            }
        </p>


        <p className='mb-1'>Rating:</p>
        <div className='flex items-center gap-2'>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> {rating} 
        </div>


<div className='flex items-center justify-center gap-3'>


        <button onClick={()=>btnData(fnd)} className='btn rounded-full bg-[#9538E2] text-white p-3 mt-5 flex gap-2'>Add To Card <img className='w-5 h-5' src="https://i.ibb.co.com/1fgxktw/shopping-cart.png" alt="" /></button>
        <button  className='btn rounded-full bg-white relative top-2'><img className='w-7 h-7' src="https://i.ibb.co.com/pzW8RpX/heart.png" alt="" /></button>
        </div>
      </div>
      </div>
    </div>
  )
}
