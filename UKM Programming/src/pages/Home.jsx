import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="title">Ini Home</h1>
      <div>
        <button className="p-2 px-4 border border-white border-opacity-30 rounded-md mt-2 bg-blue-600 bg-opacity-30 hover:bg-opacity-50" onClick={() => navigate("/prodi")}>Prodi</button>
      </div>
    </div>
  )
}

export default Home