import { useState } from "react"

function RegisterClinic() {

  // State for doctors list
  const [doctors, setDoctors] = useState([
    { name: "", specialization: "", experience: "" }
  ])

  // Add new doctor
  const addDoctor = () => {
    setDoctors([
      ...doctors,
      { name: "", specialization: "", experience: "" }
    ])
  }

  // Remove doctor
  const removeDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index)
    setDoctors(updatedDoctors)
  }

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center py-20">

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          Register Your Clinic
        </h1>

        <form className="space-y-6">

          {/* Clinic Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Clinic Name
            </label>

            <input
              type="text"
              placeholder="Enter clinic name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Clinic Address */}
          <div>
            <label className="block text-gray-700 mb-1">
              Clinic Address
            </label>

            <input
              type="text"
              placeholder="Enter clinic address"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Doctors Section */}
          <div>

            <h2 className="text-lg font-semibold mb-4">
              Doctors
            </h2>

            {doctors.map((doctor, index) => (

              <div
                key={index}
                className="relative border border-gray-200 rounded-md p-4 mb-4"
              >

                {/* Remove Button */}
                {doctors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDoctor(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                  >
                    ✕
                  </button>
                )}

                {/* Doctor Number */}
                <p className="font-medium mb-3">
                  Doctor {index + 1}
                </p>

                {/* Doctor Name */}
                <input
                  type="text"
                  placeholder="Doctor Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
                />

                {/* Specialization */}
                <input
                  type="text"
                  placeholder="Specialization"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
                />

                {/* Experience */}
                <input
                  type="text"
                  placeholder="Experience (years)"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />

              </div>

            ))}

            {/* Add Doctor Button */}
            <button
              type="button"
              onClick={addDoctor}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200"
            >
              + Add Another Doctor
            </button>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register Clinic
          </button>

        </form>

      </div>

    </section>
  )
}

export default RegisterClinic