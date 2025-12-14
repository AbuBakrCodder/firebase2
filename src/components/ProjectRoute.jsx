import { Navigate } from "react-router-dom"
import { useAuthState } from "../hooks/useAuthState"

const ProjectRoute = ({ children }) => {
    const { user, loading } = useAuthState()

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>
    }

    return user ? children : <Navigate to="/login" />
}

export default ProjectRoute
