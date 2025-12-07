import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Layout() {
    return (
        <div className="w-full max-w-[1920px] mx-auto my-0">
            <Navbar />
            <main>
                <Outlet/>
            </main>
            {/* footer */}
        </div>
    )
}

export default Layout
