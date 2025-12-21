import { useAuthState } from "../hooks/useAuthState";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Profile() {
    const { user } = useAuthState()
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

    return (
        <div>
            {user && (
                <div className="flex flex-col gap-3 p-10">
                    <div className="flex flex-col justify-center gap-3">
                        <button className="text-4xl" onClick={()=>navigate("/")}><BiArrowBack /></button>
                        <img src={user.photoURL} className="w-50 rounded-4xl" alt="" />
                        <h1 className="text-4xl font-bold">{user.displayName}</h1>
                        <p className="text-lg font-bold">{user.email}</p>
                    </div>
                    <div className="flex flex-col gap-3 w-40 bg-white rounded-2xl">
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
                </div>
            )}
        </div>
    )
}

export default Profile
