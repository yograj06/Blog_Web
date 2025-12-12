import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const localEmail = localStorage.getItem('email')
  const localPassword = localStorage.getItem('password')
  const localName = localStorage.getItem('name')

  useEffect(() => {
    if (localEmail) setShow(true)
  }, [localEmail])

  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value)
      localStorage.setItem('email', email.current.value)
      localStorage.setItem('password', password.current.value)
      localStorage.setItem('signup', email.current.value)
      alert('Account created successfully!')
      window.location.reload()
    } else {
      alert('Please fill all fields!')
    }
  }

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem('signup', email.current.value)
      alert(`Welcome back, ${localName}!`)
      navigate('/')
      window.location.reload()
    } else {
      alert('Invalid email or password')
    }
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8 text-black">
      {show ? (
    
        <div className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8 sm:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Welcome Back, <span className="text-gray-800">{localName}</span>
          </h1>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-black bg-gray-50"
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-black bg-gray-50"
            />

            <button
              onClick={handleSignIn}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-800 transition-all"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <span
                onClick={() => setShow(false)}
                className="text-black font-medium hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      ) : (
    
        <div className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8 sm:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Create an Account
          </h1>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              ref={name}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-black bg-gray-50"
            />
            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-black bg-gray-50"
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-black bg-gray-50"
            />

            <button
              onClick={handleSignUp}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-800 transition-all"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <span
                onClick={() => setShow(true)}
                className="text-black font-medium hover:underline cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignIn
