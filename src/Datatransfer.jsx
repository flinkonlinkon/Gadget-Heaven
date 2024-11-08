
import React, { createContext, useState } from 'react'
export const DataContext = createContext(null)

const  Datatransfer =({children})=> {

    let [storData,setStorData] = useState([])
  return (
    <DataContext.Provider value={{storData,setStorData}}>
{children}
      
    </DataContext.Provider>
  )
}

export default Datatransfer
