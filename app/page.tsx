export default function Home() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-800">Welcome to My App</h1>
				<p className="mt-4 text-gray-600">This is the home page.</p>
				<div className="mt-6">
					<a
						href="/login"
						className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
					>
						Login
					</a>
					<a
						href="/register"
						className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
					>
						Register
					</a>
				</div>
			</div>
		</main>
	)
}
