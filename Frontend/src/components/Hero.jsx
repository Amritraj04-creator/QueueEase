import { Link } from "react-router-dom"
import heroImage from "../assets/hero.png"

function Hero() {
  return (
    <section className="bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Queue Management for Clinics
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              QueueEase helps clinics reduce waiting time by allowing
              patients to book their place in the queue online and manage
              appointments efficiently.
            </p>

            <div className="flex gap-4">

              <Link
                to="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/register-clinic"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
              >
                Register Clinic
              </Link>

            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="flex justify-center">
            <img
               src={heroImage}
               alt="QueueEase Illustration"
               className="w-full "
              />
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero