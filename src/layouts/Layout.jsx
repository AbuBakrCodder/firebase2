import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../pages/Footer"

function Layout() {
    return (
        <div className="w-full max-w-[1920px] mx-auto my-0">
            <Navbar />
            <br /><br /><br />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
