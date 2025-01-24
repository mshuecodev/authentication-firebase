"use client"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/context/AuthContex"

const Register: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()
	const { handleRegister, token, loading } = useAuth()

	const handleRegisterSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await handleRegister(email, password)
			console.log("Registration successful, pushing to dashboard...")
			router.push("/dashboard")
		} catch (error) {
			console.error("Registration failed:", error)
		}
	}

	useEffect(() => {
		if (token) {
			console.log("Token exists, redirecting to dashboard...")
			router.push("/dashboard")
		}
	}, [token, router])

	if (loading) return <div>Loading...</div>

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-2xl font-semibold text-gray-900 mb-6">Register</h1>
				<form
					onSubmit={handleRegisterSubmit}
					className="space-y-6"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
							placeholder="Enter your email"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
							placeholder="Enter your password"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
					>
						Register
					</button>
				</form>
				<div className="mt-6">
					<button
						onClick={() => router.push("/login")}
						className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Register
