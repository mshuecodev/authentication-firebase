"use client"
import { useAuth } from "@/app/context/AuthContex"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Dashboard: React.FC = () => {
	const { user, loading, token, handleLogout } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!loading && !token) {
			router.push("/login")
		}
	}, [token, loading, router])

	if (loading) return <div>Loading...</div>

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
				{user ? (
					<>
						<p className="text-gray-700 mb-4">Welcome, {user.email}</p>
						<button
							onClick={handleLogout}
							className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
						>
							Logout
						</button>
					</>
				) : (
					<p className="text-gray-700">You are not logged in.</p>
				)}
			</div>
		</div>
	)
}

export default Dashboard
