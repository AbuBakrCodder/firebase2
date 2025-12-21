import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useAuth } from "../hooks/useAuth"
import { FaGoogle } from "react-icons/fa"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, loading, loginWithGoogle } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error("Please fill all fields")
            return
        }

        try {
            await login(email, password)
            toast.success("Welcome back!")
            navigate("/")
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form
                action="#"
                onSubmit={handleSubmit}
                className="mx-auto w-lg space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
            >
                <h1 className="text-center text-2xl font-bold">Log in</h1>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="pass">
                        Password
                    </label>
                    <input
                        className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
                        id="pass"
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <button
                        disabled={loading}
                        className="block w-50 rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 disabled:opacity-50"
                        type="button"
                    >
                        {loading ? "Logging in..." : "Log in"}
                    </button>
                    <button className="flex items-center justify-center gap-3 w-50 rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="button" onClick={loginWithGoogle}><FaGoogle /> Google</button>
                </div>

                <p className="text-center text-xl">
                    If you don't have an account,{" "}
                    <NavLink className="font-bold text-blue-300 text-2xl" to={"/register"}>
                        Sign up
                    </NavLink>
                </p>
            </form>
        </div>
    )
}

export default Login
