import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">
          QueueEase
        </h1>

        <div className="flex gap-4 items-center">

  <Link to="/" className="px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg transform transition duration-200 cursor-pointer"
>
  Home
</Link>

  <Link to="/about" className="px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg transform transition duration-200 cursor-pointer">
    About
  </Link>

  <Link to="/login" className="px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg transform transition duration-200 cursor-pointer">
    Login
  </Link>

  <Link to="/signup" className="px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg transform transition duration-200 cursor-pointer">
    Sign Up
  </Link>

  <Link to="/register-clinic" className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transform transition duration-200 cursor-pointer">
    Register Clinic
  </Link>

</div>
      </div>
    </nav>
  )
}

export default Navbar