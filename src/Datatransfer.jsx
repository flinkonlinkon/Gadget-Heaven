
import React, { createContext, useState } from 'react'
export const DataContext = createContext(null)

const  Datatransfer =({children})=> {

    let [storData,setStorData] = useState([])
    function remove(titleNme){
      let filter = storData.filter(x=> x.product_title !== titleNme)
      console.log(filter);
      setStorData(filter)
      
    }

    function priceShort() {
      const sortedData = [...storData].sort((a, b) => a.price - b.price);
      setStorData(sortedData);
     
      
    }


  return (
    <DataContext.Provider value={{storData,setStorData,remove,priceShort}}>
{children}
      
    </DataContext.Provider>
  )
}

export default Datatransfer
