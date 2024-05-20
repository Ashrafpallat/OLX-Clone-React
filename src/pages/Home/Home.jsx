import React from 'react'
import Card from '../../components/Card/Card'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
      <h1 className='page-heading'>Fresh recommendations</h1>
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>

  )
}

export default Home
