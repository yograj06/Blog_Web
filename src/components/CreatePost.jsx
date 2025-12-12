import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      name,
      title,
      desc,
    }

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || []
    const updatedPosts = [...existingPosts, newPost]
    localStorage.setItem('posts', JSON.stringify(updatedPosts))

    navigate('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 border border-gray-200 shadow-lg rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-2">
          Create a New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Post Title
            </label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Description
            </label>
            <textarea
              placeholder="Describe everything about this post here..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full p-3 h-32 sm:h-40 border border-gray-300 rounded-xl bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-black transition-all"
              required
            ></textarea>
          </div>

      
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Publish Post
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full py-2 rounded-xl border border-gray-400 text-black font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
