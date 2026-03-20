function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How QueueEase Works
          </h2>

          <p className="text-gray-600 mt-4">
            A simple process that saves time for both patients and clinics.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="text-center">

            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Book Queue Slot
            </h3>

            <p className="text-gray-600">
              Patients reserve their place in the clinic queue online before arriving.
            </p>

          </div>

          {/* Step 2 */}
          <div className="text-center">

            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Track Queue Status
            </h3>

            <p className="text-gray-600">
              Patients can view real-time updates of the queue and waiting time.
            </p>

          </div>

          {/* Step 3 */}
          <div className="text-center">

            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Visit Clinic at Right Time
            </h3>

            <p className="text-gray-600">
              Patients arrive when their turn is near, reducing long waiting times.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks