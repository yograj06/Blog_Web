import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (

    <nav className="bg-yellow-200 shadow-md py-8 relative">

      <div className="flex justify-between items-center px-6">

        <header className="bg-yellow-200 text-center">

          <h1 className="text-4xl font-extrabold text-black tracking-wide">

            Blog<span className="text-[#715A5A]">Web</span>
          </h1>

        </header>

        { }
        <h1 className="text-xl font-bold text-black"></h1>

        { }
        <ul className="hidden sm:flex space-x-8 text-black font-medium">
          <li>
            <NavLink to="/" className="hover:text-gray-600 transition">Home</NavLink>
          </li>
          <li>
            <NavLink to="/createpost" className="hover:text-gray-600 transition">Create Post</NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="hover:text-gray-600 transition">Sign In</NavLink>
          </li>
        </ul>

        { }
        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      { }
      {open && (
        <div className="sm:hidden bg-yellow-100 shadow-md mt-3 rounded-xl py-4 px-6 space-y-4 text-black font-medium">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-gray-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/createpost"
            onClick={() => setOpen(false)}
            className="block hover:text-gray-500"
          >
            Create Post
          </NavLink>

          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className="block hover:text-gray-500"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default NavBar
