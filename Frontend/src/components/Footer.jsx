import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main footer container */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Footer sections */}
        <div className="flex justify-between flex-wrap gap-8">

          {/* Brand Section */}
          <div className="max-w-sm">
            <h2 className="text-xl font-bold mb-2">QueueEase</h2>
            <p className="text-gray-400">
              Smart queue management for clinics.  
              Reduce waiting time and manage appointments easily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-gray-400">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-white transition">
                About
              </Link>

              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>

              <Link to="/register-clinic" className="hover:text-white transition">
                Register Clinic
              </Link>

            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <div className="text-gray-400 space-y-2">
              <p>Email: support@queueease.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Location: India</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} QueueEase. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer