import { useState } from 'react'
import './style.css'



function App() {
  

  return (
    <>
      <div className='container'>
        <h1 className='title'>Busca CEP</h1>
        <div className='search'>
          <input className='input' type='text' placeholder='Digite o CEP' />
          <button>Buscar</button>
          </div>
          <div className="main">
            <h2>Cep: 31744775</h2>
            <span>Rua tal tal tal</span>
            <span>Bairro tal tal tal</span>
            <span>Cidade tal tal tal</span>
            <span>Estado tal tal tal</span>
          </div>
        
      </div>
      
    </>
  )
}

export default App
