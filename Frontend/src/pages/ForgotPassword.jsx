function ForgotPassword() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Enter your email and we will send you a password reset link.
        </p>

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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>

        </form>

      </div>

    </section>
  )
}

export default ForgotPassword