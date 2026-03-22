import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle login
  const handleLogin = async (e) => {
  e.preventDefault();

  const { email, password } = form;

  // Validation
  if (!email || !password) {
    setError("All fields are required");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    // Mark as existing user
    localStorage.setItem("isNewUser", "false");

    // (Optional for next step)
    localStorage.setItem("user", JSON.stringify(data.user));

    // Redirect to dashboard
    window.location.href = "/dashboard";

  } catch (error) {
    console.error(error);
    setError("Server error. Try again later.");
  }
};

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login to QueueEase
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-center mt-2">
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
  );
}

export default Login;