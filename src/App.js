import React, { useEffect, useState } from 'react'
import './Style.css'
import PomodroTimer from './Component/PomodroTimer'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './Component/Firebase'
function App() {
    const [value,setValue] =useState('')
    const handleClick =()=>{
    
         signInWithPopup(auth,provider).then((data)=>{
           setValue(data.user.email)
           localStorage.setItem("email", data.user.email)
         })
    }
     
     useEffect(()=>{
        setValue(localStorage.getItem("email"))
     })
  return (
    <div className='app' >
        <h1>Pomodro Timer</h1><br />
       <div className='Timer'>
       {value? <PomodroTimer/> :
      <button onClick={handleClick} >Sign in with google</button>
  }
        </div> 
    </div>
  )
}

export default App
