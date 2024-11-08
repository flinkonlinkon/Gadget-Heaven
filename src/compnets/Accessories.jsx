import React, { useContext, useEffect } from 'react'
import { ConTax } from '../App'
import Card from '../Card';
import { useState } from 'react';

export default function Accessories() {
  const data = useContext(ConTax)
    
    
    const filterData = [...data[0]].filter(fi => fi.category === "Accessories")
    
    
  return (
    <div className='w-[1016px] grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        filterData.map(x => <Card x={x}></Card>)
      }
    </div>
  )
}
