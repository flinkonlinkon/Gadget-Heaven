
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './compnets/NavBar'
import Footer from './Footer'
import { createContext, useEffect, useState } from 'react'
import Card from './Card'

export const ConTax = createContext([])

function App() {

  let [api,setApi] = useState([])
  useEffect(()=>{
    async function apiData(){
      let url = await fetch('./gadgetdata.json')
      let data = await url.json()
      setApi(data)

    } 
    apiData()

  },[])
  const apiConstax = api

  return (
    <>
    <div className='font-sora'>
      <ConTax.Provider value={[api,setApi]}>
      <NavBar apiConstax={apiConstax}></NavBar>
      
      <Outlet apiConstax={apiConstax}></Outlet>
      <Footer></Footer>

      </ConTax.Provider>
      
    </div>
     
    </>
  )
}

export default App
