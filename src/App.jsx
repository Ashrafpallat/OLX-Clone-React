import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config'

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log('logged in');
        navigate('/')
      }else{
        console.log('logged out');
        navigate('/signup')
      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App
