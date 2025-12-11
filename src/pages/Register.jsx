import { NavLink } from "react-router-dom"
import { toast } from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register({ setUser }) {
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    const handlechange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!file) {
            toast.error("Please select an image file")
            return
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = async () => {
            const base64 = reader.result.split(',')[1]

            const formdata = new FormData()
            formdata.append("key", "5fb1caaa76367162350690221b08d97c")
            formdata.append("image", base64)

            try {
                const res = await fetch("https://api.imgbb.com/1/upload", {
                    method: "POST",
                    body: formdata
                })

                const data = await res.json()
                console.log(data)
                toast.success("Uploaded!")
                e.target.reset()
                setFile(null)
                setUser(true)
                navigate("/")

            } catch (err) {
                toast.error(`Failed to upload image: ${err.message}`)
            }
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <form action="#" className="mx-auto w-xl space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6" onSubmit={handleSubmit}>
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
                    <label htmlFor="File" className="block rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6">
                        <div className="flex items-center justify-center gap-4">
                            <span className="font-medium"> Upload your photo</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"></path>
                            </svg>
                        </div>
                        <input multiple="" accept="image/*" onChange={handlechange} type="file" id="File" className="sr-only" />
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
