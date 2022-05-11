import React from 'react'
import './Contador.css'

function Contador({ contador }) {
  return (
    <div className='contador'>
      { contador }
    </div>
  )
}

export default Contador;