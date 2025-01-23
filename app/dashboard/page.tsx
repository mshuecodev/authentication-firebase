"use client"
import { useAuth } from "@/app/context/AuthContex"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Dashboard: React.FC = () => {
	const { user, loading, token } = useAuth()
	const router = useRouter()

	useEffect(() => {
		console.log("Dashboard", user, loading, token)
		if (!loading && !token) {
			router.push("/login")
		}
	}, [token, loading, router])

	if (loading) return <div>Loading...</div>

	return (
		<div>
			<h1>Welcome to the Dashboard</h1>
			<p>User: {user?.email}</p>
		</div>
	)
}

export default Dashboard
