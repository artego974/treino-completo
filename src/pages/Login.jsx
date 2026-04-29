import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const data = await api("/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <div className="flex w-[900px] bg-[#1c1c1c] rounded-3xl overflow-hidden">

        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold mb-8 text-center text-white">
            TEAMVIEW
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-5 p-4 rounded-xl bg-[#2a2a2a] placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-lime-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-6 p-4 rounded-xl bg-[#2a2a2a] placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-lime-400 transition"
          />

          <button
            onClick={handleLogin}
            className="w-full p-3 rounded-xl bg-lime-500 text-black font-bold hover:opacity-85 transition"
          >
            Login
          </button>
        </div>

        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

