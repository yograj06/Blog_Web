import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const logout = () => {
    localStorage.removeItem('signup')
    window.location.reload()
  }

  const deleteAcc = () => {
    localStorage.clear()
    window.location.reload()
  }

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || []
    setPosts(savedPosts)
  }, [])

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
  }

  return (
    <div className="min-h-screen bg-yellow-200 text-black py-8 px-4 sm:px-6 lg:px-10">

      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 bg-yellow-100 shadow-md rounded-2xl px-6 py-4 border border-gray-200 space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Post Blog
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            {localStorage.getItem("signup")
              ? (
                <>
                  Welcome back,{" "}
                  <span className="font-semibold text-black">
                    {localStorage.getItem("name")}
                  </span>
                </>
              )
              : "Welcome User"}
          </p>

        </div>


        <div className="flex flex-wrap justify-center sm:justify-end gap-3">

          {/* Always visible: + New Post */}
          <Link
            to="/createpost"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md transition-all text-sm sm:text-base"
          >
            + New Post
          </Link>

         

          { }
          {localStorage.getItem('signup') && (
            <>
              <button
                onClick={logout}
                className="bg-gray-100 hover:bg-gray-300 text-black font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md transition-all text-sm sm:text-base"
              >
                Logout
              </button>

              <button
                onClick={deleteAcc}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md transition-all text-sm sm:text-base"
              >
                Delete Account
              </button>
            </>
          )}

        </div>

      </header>


      <main className="max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center mt-16 sm:mt-24 px-4">
            <h2 className="text-2xl font-semibold mb-2">No Posts Yet</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              You haven’t created any posts yet. Click{' '}
              <span className="text-black font-semibold">“+ New Post”</span>{' '}
              to get started!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-yellow-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-black mb-2 break-words">
                    {post.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {post.desc.length > 100
                      ? post.desc.slice(0, 100) + '...'
                      : post.desc}
                  </p>

                  <button
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="mt-3 text-sm font-medium text-gray-700 hover:text-black transition-all"
                  >
                    Read More →
                  </button>
                </div>

                <div className="mt-4 flex justify-between items-center border-t pt-3">
                  <p className="text-xs sm:text-sm text-gray-600">
                    — {post.name}
                  </p>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
