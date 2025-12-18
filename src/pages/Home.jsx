import { FaStopwatch, FaTasks } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1920px] w-full">
      <div className="bg-gray-400 w-full text-white text-center flex flex-col items-center justify-center gap-3 h-48 sm:h-56 md:h-64 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome ToDos</h1>
        <p className="text-blue-700 text-xs sm:text-sm md:text-base">Create a diary for yourself!</p>
        <button className="bg-white text-black py-2 px-4 sm:py-3 sm:px-5 rounded-2xl hover:bg-black hover:text-white transition-all text-sm sm:text-base" onClick={()=>{navigate("/myToDos")}}>Get started</button>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 py-4 px-4">
        <h2 className="text-2xl sm:text-3xl text-center">What's on this site?</h2>
        <div className="flex flex-col gap-2 text-base sm:text-lg">
          <p className="flex items-center gap-3"><FaTasks /> Tasks</p>
          <p className="flex items-center gap-3"><FaStopwatch /> Alarm clock (COMING SOON)</p>
        </div>
      </div>
    </div>
  )
}

export default Home
