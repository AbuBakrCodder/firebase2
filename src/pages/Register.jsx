import { NavLink } from "react-router-dom"

function Register() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <form action="#" className="mx-auto w-xl space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
                <h1 className="text-center text-2xl font-bold">Create your account</h1>
                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="name">Name</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="Your name" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="email">Email</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Your email" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="pass">Create password</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="pass" type="password" placeholder="Your password" />
                </div>
                <div>
                    <label for="File" class="block rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6">
                        <div class="flex items-center justify-center gap-4">
                            <span class="font-medium"> Upload your photo</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"></path>
                            </svg>
                        </div>
                        <input multiple="" type="file" id="File" class="sr-only" />
                    </label>
                </div>
                <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                    Register
                </button>
                <p className="text-center text-xl">If you have an acount <NavLink className="font-bold text-blue-300 text-2xl" to={"/login"}>Log in</NavLink></p>
            </form>
        </div>
    )
}

export default Register