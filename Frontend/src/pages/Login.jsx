import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login to QueueEase
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <p className="text-center">
               <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                 Forgot Password?
               </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        
      </div>

    </section>
  )
}

export default Login