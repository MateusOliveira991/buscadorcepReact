import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  

  return (
    <>
      <div className='container'>
        <h1 className='title'>Busca CEP</h1>
        <div className='search'>
          <input type='text' placeholder='Digite o CEP' />
          <button>Buscar</button>
          </div>
        
      </div>
      
    </>
  )
}

export default App
