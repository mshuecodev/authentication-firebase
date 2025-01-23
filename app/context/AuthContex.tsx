"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
import { User, onIdTokenChanged, getIdToken, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase/clientApp"

interface AuthContextProps {
	user: User | null
	loading: boolean
	token: string | null
	login: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	loading: true,
	token: null,
	login: async () => {}
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [token, setToken] = useState<string | null>(null)

	const login = async (email: string, password: string) => {
		const userCredential = await signInWithEmailAndPassword(auth, email, password)
		console.log("User logged in:", userCredential.user)
		const token = await getIdToken(userCredential.user)
		setUser(userCredential.user)
		setToken(token)
	}

	useEffect(() => {
		console.log("Setting up onIdTokenChanged listener")
		const unsubscribe = onIdTokenChanged(auth, async (user) => {
			console.log("Auth state updated:", user)
			setUser(user)
			setLoading(false)
			if (user) {
				const token = await getIdToken(user)
				console.log("Token retrieved:", token)
				setToken(token)
			} else {
				setToken(null)
			}
		})

		return () => {
			console.log("Cleaning up onAuthStateChanged listener")
			unsubscribe()
		}
	}, [])

	return <AuthContext.Provider value={{ user, loading, token, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
