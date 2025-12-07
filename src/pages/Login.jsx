import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form action="#" className="mx-auto w-lg space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
                <h1 className="text-center text-2xl font-bold">Log in</h1>
                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="email">Email</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Your email" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="pass">Password</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="pass" type="password" placeholder="Your password" />
                </div>
                <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                    Log in
                </button>
                <p className="text-center text-xl">If you don't have an account, <NavLink className="font-bold text-blue-300 text-2xl" to={"/register"}>Sign up</NavLink></p>
            </form>
        </div>
    )
}

export default Login
