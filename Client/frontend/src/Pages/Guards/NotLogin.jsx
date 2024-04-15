import React from 'react'
import { Link } from 'react-router-dom'

function NotLogin() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-2/4">
        <h1 className="text-4xl text-red-600">You are not Logged in</h1>
        <h1 className="text-4xl text-slate-900">Please First Login to your account</h1>
        <Link className='text-xl text-slate-900 underline' to='/guard/sign-in'>Go To Login Page</Link>
      </div>
    </div>
  )
}

export default NotLogin
