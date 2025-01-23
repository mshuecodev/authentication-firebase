import { NextResponse } from "next/server"
import { signOut } from "firebase/auth"
import { auth } from "@/app/firebase/clientApp"

export async function POST() {
	try {
		await signOut(auth)
		return NextResponse.json({ message: "Logged out successfully" })
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 })
	}
}
