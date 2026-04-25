import React from 'react'
import Nav from '../components/Nav'

function Convidados() {
  return (
    <div className='min-h-screen flex'>
        <div className='h-screen w-1/5 '>
        <Nav/>
        </div>
        <div className='w-full flex items-center flex-col mt-10 p-5'>
            <div>
                <input>Pesquisar</input>
                <button>Exportar</button>
                <button>Novo Convidado</button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Convidados