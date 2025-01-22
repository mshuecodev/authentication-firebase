"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
import { User, onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/firebase/clientApp"

interface AuthContextProps {
	user: User | null
	loading: boolean
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	loading: true
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		console.log("Setting up onAuthStateChanged listener")
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log("Auth state updated:", user)
			setUser(user)
			setLoading(false)
		})

		return () => {
			console.log("Cleaning up onAuthStateChanged listener")
			unsubscribe()
		}
	}, [])

	return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
