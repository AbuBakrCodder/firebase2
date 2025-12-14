import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import MyToDos from "./pages/MyToDos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProjectRoute from "./components/ProjectRoute"
import { useGlobalContext } from "./hooks/useGlobalContext.js"
function App() {
  const {user} = useGlobalContext()

  const router = createBrowserRouter([{
    path: "/",
    element: <ProjectRoute user={user}>
      <Layout/>
    </ProjectRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/myToDos",
        element: <MyToDos />
      },
    ],
  },
  {
    path: "/login",
    element: user ? <Navigate to="/" /> : <Login />
  },
  {
    path: "/register",
    element: user ? <Navigate to="/" /> : <Register />
  }
  ])
  return <RouterProvider router={router} />
}

export default App
