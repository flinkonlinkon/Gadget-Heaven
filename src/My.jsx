import React from 'react'

export default function My() {
  return (
    <div className='text-center gap-7 mt-5 mb-7'>
   <p className='text-3xl font-bold'>Our Address:</p><p className='text-2xl font-bold'>Danmondi#32</p>
   <div className="join mt-4 mb-4">
    <p className='text-xl font-bold relative left-[-10px]'>Contact Us:</p>
  <input className="input input-bordered join-item" placeholder="Email" />
  <button className="btn join-item rounded-r-full">Submit</button>
</div>

    </div>
  )
}
