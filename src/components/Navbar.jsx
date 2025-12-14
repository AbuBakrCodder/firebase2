import { NavLink, Link, useNavigate } from "react-router-dom"
import { useAuthState } from "../hooks/useAuthState"
import { useAuth } from "../hooks/useAuth"

function Navbar() {
    const { user, loading } = useAuthState()
    const { logout, handleDelete } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    const deleteacc = async () => {
        await handleDelete()
        navigate("/register")
    }

    if (loading) {
        return null // yoki spinner
    }

    return (
        <header>
            <div className="flex justify-between items-center px-20 py-3">
                <Link className="font-bold text-2xl" to="/">ToDo List</Link>

                {/* NAV LINKS */}
                {user && (
                    <nav className="flex gap-5 items-center">
                        <NavLink className="text-center" to={"/"}>Home</NavLink>
                        <NavLink className="text-center" to={"/myToDos"}>My ToDos</NavLink>
                    </nav>
                )}

                {/* USER INFO */}
                {user && (
                    <div className="flex gap-3 items-center">
                        <p>Hello, {user.displayName}</p>

                        <img
                            src={user.photoURL || "https://picsum.photos/400"}
                            className="w-16 rounded-full"
                            alt="user avatar"
                        />

                        <button
                            onClick={handleLogout}
                            className="border-2 px-3 rounded hover:bg-amber-400 hover:border-amber-300 hover:text-white font-bold active:scale-75"
                        >
                            Log Out
                        </button>
                        <button
                            onClick={()=>{deleteacc()}}
                            className="border-2 px-3 rounded hover:bg-red-600 hover:text-white font-bold active:scale-75"
                        >
                            Delete Acc
                        </button>
                    </div>
                )}

                {/* AUTH LINKS */}
                {!user && (
                    <nav className="flex gap-5 items-center">
                        <NavLink className="text-center" to={"/login"}>Login</NavLink>
                        <NavLink className="text-center" to={"/register"}>Sign up</NavLink>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Navbar
