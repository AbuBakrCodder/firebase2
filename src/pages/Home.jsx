import { FaStopwatch, FaTasks } from "react-icons/fa"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-400 w-screen text-white text-center flex flex-col items-center justify-center gap-3 h-48">
        <h1 className="text-4xl font-semibold">Welcome ToDos</h1>
        <p className="text-blue-700 text-sm">Create a diary for yourself!</p>
        <button className="bg-white text-black py-3 px-5 rounded-2xl hover:bg-black hover:text-white transition-all" onClick={()=>{navigate("/myToDos")}}>Get started</button>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 py-4">
        <h2 className="text-3xl">What's on this site?</h2>
        <div className="flex flex-col gap-2 text-lg">
          <p className="flex items-center gap-3"><FaTasks /> Tasks</p>
          <p className="flex items-center gap-3"><FaStopwatch /> Alarm clock (COMING SOON)</p>
        </div>
      </div>
    </div>
  )
}

export default Home
