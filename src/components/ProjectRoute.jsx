import { Navigate } from "react-router-dom"

function ProjectRoute({ user, children }) {

    if (!user) {
        return <Navigate to="/register" replace />
    }

    return children
}

export default ProjectRoute
