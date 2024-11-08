import React, { useContext, useEffect } from 'react'
import { ConTax } from '../App'
import Card from '../Card';
import { useState } from 'react';

export default function Laptop() {
    const [data] = useContext(ConTax)
    const filterData = [...data].filter(fi => fi.category === "Laptop")
    


        





    
  return (
    <div className='w-[1016px] grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        filterData.map(x => <Card x={x}></Card>)
      }
    </div>
  )
}
