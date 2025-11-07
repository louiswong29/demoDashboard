import React, { useState } from "react"

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      const data = await res.json()
      onLogin(data.user)
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border rounded-xl p-6 w-80 shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  )
}
