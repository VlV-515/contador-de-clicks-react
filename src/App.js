import { useState } from 'react'
import './App.css'
import logo from './logo.svg'
import Boton from './components/Boton/Boton'
import Contador from './components/Contador/Contador'

function App() {
  const [contador, setContador] = useState(0)

  const manejarClic = () => {
    setContador(contador + 1)
  }
  const resetContador = () => {
    setContador(0)
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador contador={contador} />
        <Boton
          texto='Sumar Clic'
          esBotonClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={resetContador}
        />
      </div>
    </div>
  )
}

export default App
