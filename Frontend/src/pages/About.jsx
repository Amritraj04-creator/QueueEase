function About() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About QueueEase
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-10">
          QueueEase is a smart queue management platform designed to reduce
          waiting times in clinics. It allows patients to reserve their place
          in the queue online and helps clinics manage patient flow more
          efficiently.
        </p>

        {/* Problem Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            The Problem
          </h2>

          <p className="text-gray-700">
            In many clinics patients have to wait for long periods of time.
            Crowded waiting rooms create discomfort and make it difficult
            for clinics to manage patient flow effectively.
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Our Solution
          </h2>

          <p className="text-gray-700">
            QueueEase introduces a digital queue system where patients
            can book their slot in advance and monitor the queue status.
            Clinics get a simple dashboard to manage appointments and
            queues efficiently.
          </p>
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Our Vision
          </h2>

          <p className="text-gray-700">
            Our vision is to make healthcare visits smoother by eliminating
            unnecessary waiting time and helping clinics provide better
            service to their patients.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About