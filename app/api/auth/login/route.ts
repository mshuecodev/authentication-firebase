import { NextResponse } from "next/server"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase/clientApp"

export async function POST(req: Request) {
	const { email, password } = await req.json()

	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password)
		return NextResponse.json({ user: userCredential.user })
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}
}
