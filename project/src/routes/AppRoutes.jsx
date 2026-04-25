import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Dashboard from '../pages/Dashboard'
import Convidados from '../pages/Convidados'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/convidados'element={<Convidados/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes