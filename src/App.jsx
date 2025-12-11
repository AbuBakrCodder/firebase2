import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import MyToDos from "./pages/MyToDos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProjectRoute from "./components/ProjectRoute"
import { useState } from "react"

function App() {
  const [user, setUser] = useState(false)

  const router = createBrowserRouter([{
    path: "/",
    element: <ProjectRoute user={user} setUser={setUser}>
      <Layout setUser={setUser}/>
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
    element: user ? <Navigate to="/" /> : <Register setUser={setUser} />
  }
  ])
  return <RouterProvider router={router} />
}

export default App
