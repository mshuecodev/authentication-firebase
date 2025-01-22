"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const Register: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()
		const res = await fetch("/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password })
		})

		if (res.ok) {
			router.push("/dashboard")
		} else {
			console.error(await res.json())
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleRegister}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default Register
