import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="max-w-[1920px] mx-auto px-5 md:px-20 py-10">

                {/* TOP */}
                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* LOGO + DESC */}
                    <div>
                        <h2 className="text-2xl font-bold">My ToDos</h2>
                        <p className="text-gray-400 mt-2 max-w-sm">
                            Simple and powerful ToDo app to manage your daily tasks easily.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="flex gap-10">
                        <div>
                            <h3 className="font-semibold mb-2">Pages</h3>
                            <ul className="space-y-1 text-gray-400 flex flex-col gap-1">
                                <Link to="/">Home</Link>
                                <Link to="/myToDos">My ToDos</Link>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} My ToDos. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer
