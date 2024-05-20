import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src="https://via.placeholder.com/150" className='card-image' alt="image not found" />
        <h1 className='card-title'>₹24,00,000</h1>
        <p className='card-description text-sm'> 2023 - 23000.0 km</p>
        <p className='text-sm text-gray-500'>Mahindra XUV700 AX7 AWD, 2023</p>
        {/* <p className='seller'>ROSHINI SECTOR 7, DELHI</p> */}
      </div>
    </div>

  )
}

export default Card
