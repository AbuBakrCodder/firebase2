import { NavLink, Link, useNavigate } from "react-router-dom"
import { useAuthState } from "../hooks/useAuthState"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"
import { FaBars } from "react-icons/fa"


function Navbar() {
    const { user, loading } = useAuthState()
    const { logout, handleDelete } = useAuth()
    const navigate = useNavigate()

    const [modal, setModal] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    const deleteacc = async () => {
        await handleDelete()
        navigate("/register")
    }

    if (loading) return null

    return (
        <header className="fixed top-0 w-full bg-white shadow z-50">
            <div className="max-w-[1920px] mx-auto px-5 md:px-20 py-3 flex justify-between items-center">

                {/* LOGO */}
                <Link className="font-bold text-2xl" to="/">ToDo List</Link>

                {/* DESKTOP NAV */}
                {user && (
                    <nav className="hidden md:flex gap-6 items-center">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/myToDos">My ToDos</NavLink>
                    </nav>
                )}

                {/* USER + HAMBURGER */}
                <div className="flex items-center gap-4">
                    {user && (
                        <>
                            {/* DESKTOP USER */}
                            <div className="hidden md:flex items-center gap-3 relative select-none" onClick={() => setModal(!modal)}>
                                <p>Hello, {user.displayName}</p>
                                <img
                                    src={user.photoURL || "https://picsum.photos/200"}
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                />

                                {modal && (
                                    <div className="absolute right-0 top-14 bg-white shadow-lg p-4 rounded-xl flex flex-col gap-2">
                                        <button
                                            onClick={handleLogout}
                                            className="border px-3 py-1 rounded hover:bg-amber-400 hover:text-white"
                                        >
                                            Log Out
                                        </button>
                                        <button
                                            onClick={deleteacc}
                                            className="border px-3 py-1 rounded hover:bg-red-600 hover:text-white"
                                        >
                                            Delete Acc
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* HAMBURGER */}
                            <button
                                className="md:hidden"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <FaBars />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && user && (
                <div className="w-70 md:hidden bg-white shadow px-5 py-4 flex flex-col gap-4">
                    <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
                    <NavLink onClick={() => setMenuOpen(false)} to="/myToDos">My ToDos</NavLink>

                    <hr />

                    <div className="flex items-center gap-3" onClick={() => { setModal(!modal) }}>
                        <img
                            src={user.photoURL || "https://picsum.photos/200"}
                            className="w-12 h-12 rounded-full"
                        />
                        <p>{user.displayName}</p>
                    </div>
                    {modal && (

                        <div className="flex flex-col gap-3 w-40 bg-white rounded-2xl p-5 absolute top-full">
                            <button
                                onClick={handleLogout}
                                className="border px-3 py-1 rounded hover:bg-amber-400 hover:text-white"
                            >
                                Log Out
                            </button>

                            <button
                                onClick={deleteacc}
                                className="border px-3 py-1 rounded hover:bg-red-600 hover:text-white"
                            >
                                Delete Acc
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    )
}

export default Navbar