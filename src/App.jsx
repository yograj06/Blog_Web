import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
import './App.css'
import PostDetails from './components/PostDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: '/createpost',
    element: (
      <div>
        <NavBar />
        <CreatePost />
      </div>
    ),
  },
  {
    path: '/signin',
    element: (
      <div>
        <NavBar />
        <SignIn />
      </div>
    ),
  },
  {
    path: '/post/:id',
    element: (
      <div>
        <NavBar />
        <PostDetails />
      </div>
    ),
  },
])

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
   
      <header className="bg-white shadow-md py-5 text-center border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-black tracking-wide">
          Blog<span className="text-[#715A5A]">Web</span>
        </h1>
      </header>

       
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>

      
      <footer className="text-center m-5 sm:mt-10 text-gray-600 text-xs sm:text-sm border-t border-gray-200 pt-4">
        © 2025 |
        <span className="text-[#37353E] font-semibold"> BlogWeb All rights reserved</span> — Built
        with ❤️ by Yograj Patel
      </footer>
    </div>
  )
}

export default App
