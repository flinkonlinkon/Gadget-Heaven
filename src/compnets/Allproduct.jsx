import React, { useContext } from 'react'
import { ConTax } from '../App'
import Card from '../Card'

export default function Allproduct() {
    const data = useContext(ConTax)
  return (
    <div className='w-[1016px] grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        data[0].map(x => <Card x={x}></Card>)
      }
    </div>
  )
}
