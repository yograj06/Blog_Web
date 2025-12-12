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
    <div className="min-h-screen flex flex-col bg-yellow-200 text-black">
   
       
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>

      
      <footer className="text-center m-5 sm:mt-10 text-gray-800 text-xs sm:text-sm border-t border-gray-500 pt-4">
        © 2025 |
        <span className="text-[#37353E] font-semibold"> BlogWeb All rights reserved</span> — Built
        with ❤️ by Yograj Patel
      </footer>
    </div>
  )
}

export default App
