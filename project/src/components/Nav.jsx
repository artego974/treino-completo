import { ChartColumn,  Clock, Download, SquareArrowRightExit  } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function Nav() {
    const [active, setActive] = useState("Dashboard")
    const options = [
        {name:"Dashboard", icon: ChartColumn, page: "/dashboard", },
        {name:"Convidados", icon: Clock, page: "/convidados"},
        {name:"Exportar", icon: Download, function: ""},
        {name:"Sair", icon: SquareArrowRightExit, function: ""  }
    ]
  return (
    <div className=' h-full'>
        <h1 className='text-black text-3xl font-bold p-5'>Agencia Cerimonial</h1>
        <nav className='flex items-center flex-col'>
        {options.map((opt)=>{
            const Icon = opt.icon
            return(
                <div key={opt.name} onClick={()=> setActive(opt.name)} className={`p-5 mb-5 w-full gap-3 text-black flex rounded-lg  cursor-pointer ${active == opt.name ? "bg-blue-300": "hover:bg-neutral-200 transition-colors" }`}>
                    
                    {opt.page ? <Link to= {opt.page}><Icon/> {opt.name}</Link> : <><Icon/> {opt.name}</>}

                </div>
            )
        })}
        </nav>
    </div>
  )
}

export default Nav