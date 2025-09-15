"use client"
import { useAuth } from "@/app/context/AuthContex"
import Link from "next/link"

export default function Home() {
	const { user, loading, token } = useAuth()

	const handleSignOut = async () => {
		// try {
		// 	const response = await fetch("/api/auth/logout", {
		// 		method: "POST"
		// 	})
		// 	if (response.ok) {
		// 		console.log("Logged out successfully")
		// 	} else {
		// 		console.error("Error logging out")
		// 	}
		// } catch (error) {
		// 	console.error("Error logging out:", error)
		// }
	}

	if (loading) {
		return (
			<main className="min-h-screen flex items-center justify-center bg-gray-100">
				<div className="text-center">
					<p className="text-gray-600">Loading...</p>
				</div>
			</main>
		)
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-800">Welcome to My App</h1>
				{user ? (
					<>
						<p className="mt-4 text-gray-600">Welcome, {user.email}</p>
						<p className="mt-2 text-gray-600">Token: {token}</p>
						<button
							onClick={handleSignOut}
							className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
						>
							Sign Out
						</button>
					</>
				) : (
					<>
						<p className="mt-4 text-gray-600">This is the home page.</p>
						<div className="mt-6">
							<Link href="/login">
								<span className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Login</span>
							</Link>
							<Link href="/register">
								<span className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Register</span>
							</Link>
						</div>
					</>
				)}
			</div>
		</main>
	)
}
