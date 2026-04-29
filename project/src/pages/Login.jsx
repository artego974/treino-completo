import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {api} from "../services/api"



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function handleLogin() {
      const data = await api("/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    }
    return (
      <div className="h-screen bg-neutral-100 flex justify-center items-center">
        <div className="w-1/4  shadow-2xl object-cover rounded-3xl">
          <div className="w-full flex justify-center items-center flex-col mt-5 gap-2 p-4 ">
            <h1 className="font-bold text-3xl mb-5 ">Agencia Cerimonial</h1>
            <form
              action=""
              className="w-full flex justify-center items-center flex-col  gap-2 p-2"
            >
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-3xl border p-4 cursor-pointer mb-5 placeholder: text-neutral-900 "
              />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-3xl border p-4 cursor-pointer mb-5 placeholder: text-neutral-900 "
              />
              <button
                className="w-1/2 rounded-3xl bg-blue-400 p-4 cursor-pointer font-bold"
                onClick={handleLogin}
              >
                Entrar
              </button>
            </form>
            <p
              className="cursor-pointer text-blue-500"
              onClick={() => navigate("/cadastro")}
            >
              Não tem cadastro?
            </p>
          </div>
        </div>
      </div>
    );
}

export default Login