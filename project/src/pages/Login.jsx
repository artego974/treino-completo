import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    return (
        <div className='h-screen bg-neutral-100 flex justify-center items-center'>
            <div className='w-1/4 h-2/4 shadow-2xl object-cover rounded-3xl'>
                <div className='w-full flex justify-center items-center flex-col mt-10 gap-3 p-5 '>
                    <h1 className='font-bold text-3xl mb-5 '>Agencia Cerimonial</h1>
                    <form action="" className='w-full flex justify-center items-center flex-col  gap-3 p-5'>
                        <input type="text" placeholder='Email' className='w-full rounded-3xl bg-neutral-200 p-4 cursor-pointer mb-5 placeholder: text-neutral-900 ' />
                        <input type="text" placeholder='Password' className='w-full rounded-3xl bg-neutral-200 p-4 cursor-pointer mb-5 placeholder: text-neutral-900 ' />
                        <button className='w-1/2 rounded-3xl bg-blue-400 p-4 cursor-pointer font-bold' onClick={()=> navigate("/dashboard")}>Entrar</button>
                    </form>
                    <p className='cursor-pointer text-blue-500' onClick={()=> navigate("/cadastro")}>Não tem cadastro?</p>
                </div>

            </div>
        </div>
    )
}

export default Login