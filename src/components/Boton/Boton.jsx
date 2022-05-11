import React from 'react'
import './Boton.css'

function Boton({ texto, esBotonClic, manejarClic }) {
  return (
    <button
      className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
      type='button'
      onClick={manejarClic}
    >
      {texto}
    </button>
  )
}

export default Boton
