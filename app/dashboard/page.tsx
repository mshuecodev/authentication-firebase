"use client"
import { useAuth } from "@/app/context/AuthContex"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Dashboard: React.FC = () => {
	const { user, loading } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!loading && !user) {
			router.push("/login")
		}
	}, [user, loading, router])

	if (loading) return <div>Loading...</div>

	return (
		<div>
			<h1>Welcome to the Dashboard</h1>
			<p>User: {user?.email}</p>
		</div>
	)
}

export default Dashboard
