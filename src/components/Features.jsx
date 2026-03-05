function Features() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features for Modern Clinics
          </h2>

          <p className="text-gray-600 mt-4">
            QueueEase simplifies clinic queue management and improves patient experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Online Queue Booking
            </h3>

            <p className="text-gray-600">
              Patients can reserve their place in the queue before arriving at the clinic.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Queue Updates
            </h3>

            <p className="text-gray-600">
              Patients can track their queue status and expected waiting time live.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Clinic Dashboard
            </h3>

            <p className="text-gray-600">
              Clinics can easily manage appointments, queues, and patient flow.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Reduced Waiting Time
            </h3>

            <p className="text-gray-600">
              Efficient queue management reduces congestion and improves patient satisfaction.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Features