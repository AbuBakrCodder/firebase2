import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import MyToDos from "./pages/MyToDos"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
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
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])
return <RouterProvider router={router} />
}

export default App
