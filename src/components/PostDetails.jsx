import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || []
    const foundPost = posts.find((p) => p.id === Number(id))
    setPost(foundPost)
  }, [id])

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700 bg-white">
        <p className="text-lg font-medium">Post not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-2xl shadow-lg p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-3 break-words">
          {post.title}
        </h1>

        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base italic">
          — Written by <span className="font-semibold text-black">{post.name}</span>
        </p>

        <div
          className="
            bg-gray-50 rounded-xl p-6 border border-gray-200
            text-gray-800 leading-relaxed text-sm sm:text-base
            max-h-[70vh] overflow-y-auto shadow-inner
          "
        >
          <p className="text-justify whitespace-pre-line">
            {post.desc}
          </p>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
