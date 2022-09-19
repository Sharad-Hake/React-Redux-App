import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const NewComp = () => {
const newDatalist = useSelector((state) => state.newtodoReducers.newlist);
const [newSt, setNewSt]= useState('');
useEffect(()=>{
    setNewSt(newDatalist);
    console.log(newSt.length)

},[newDatalist])
useEffect(()=>{
    console.log(newDatalist);
    
},[newDatalist])

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100vw'}}>
        {/* <h1>Hii</h1> */}
        
       {newDatalist &&
       <ul>
        <div>
            
            {newDatalist.map((item)=>{
                return(
                    <li style={{fontSize:'30px'}}><h3>{item.data}</h3></li>
                )
            })
            }
        </div>
        </ul>}

    </div>
  )
}

export default NewComp