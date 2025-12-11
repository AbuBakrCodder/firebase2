import { NavLink, Link } from "react-router-dom"

function Navbar() {
    let user = true
    return (
        <header>
            <div className="flex justify-between items-center px-20 py-3">
                <Link className="font-bold text-2xl" to="/">ToDo List</Link>
                {
                    user && (
                        <nav className="flex gap-5 items-center">
                            <NavLink className="text-center" to={"/"}>Home</NavLink>
                            <NavLink className="text-center" to={"/myToDos"}>My ToDos</NavLink>
                        </nav>
                    )
                }
                {
                    user && <div className="flex gap-3 items-center">
                        <p>Hello, User Name</p>
                        <img src="https://picsum.photos/400" className="w-16 rounded-full" alt="" />
                        <button className="border-2 px-3 rounded hover:bg-amber-400 hover:border-amber-300 hover:text-white font-bold active:scale-75">Log Out</button>
                    </div>
                }
                {
                    !user && (
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
