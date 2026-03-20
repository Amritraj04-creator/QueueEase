import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import clsx from "clsx"
import { cn } from "../utils/cn"

function Navbar() {
    const baseNavStyle =
  "px-4 py-2 rounded-md hover:bg-blue-500 hover:scale-105 hover:shadow-lg transform transition duration-200"
  const getNavLinkClass = ({ isActive }) =>
 cn(
  baseNavStyle,
  isActive && "bg-white text-blue-600 shadow-md"
)
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <a href="/" end className="text-xl font-bold  hover:scale-105  transform transition duration-200">
          QueueEase
        </a>

        <div className="flex gap-4 items-center">

  <NavLink to="/" end
  className={getNavLinkClass}
>
  Home
</NavLink>

  <NavLink to="/about" className={getNavLinkClass}>
    About
  </NavLink>

  <NavLink to="/login" className={getNavLinkClass}>
    Login
  </NavLink>

  <NavLink to="/signup" className={getNavLinkClass}>
    Sign Up
  </NavLink>

  <NavLink to="/register-clinic" className={getNavLinkClass}>
    Register Clinic
  </NavLink>

</div>
      </div>
    </nav>
  )
}

export default Navbar