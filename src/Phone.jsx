import React, { useContext } from 'react'
import { ConTax } from './App'
import Card from './Card'

export default function Phone() {
  const data = useContext(ConTax)
  const api = [...data[0]].filter(x => x.category === 'Phone')
  return (
    <div className='w-[1016px] grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        api.map(x=> <Card x={x}></Card>)
      }
    </div>
  )
}
