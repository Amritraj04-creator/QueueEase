import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterClinic() {
  const navigate = useNavigate();

  // Clinic state
  const [clinic, setClinic] = useState({
    name: "",
    address: "",
    phone: ""
  });

  // Doctors state
  const [doctors, setDoctors] = useState([
    { name: "", specialization: "", experience: "" }
  ]);

  // Handle clinic input
  const handleClinicChange = (e) => {
    setClinic({
      ...clinic,
      [e.target.name]: e.target.value
    });
  };

  // Handle doctor input
  const handleDoctorChange = (index, e) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index][e.target.name] = e.target.value;
    setDoctors(updatedDoctors);
  };

  // Add doctor
  const addDoctor = () => {
    setDoctors([
      ...doctors,
      { name: "", specialization: "", experience: "" }
    ]);
  };

  // Remove doctor
  const removeDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      clinic,
      doctors
    };

    // TEMP: store in localStorage
    localStorage.setItem("clinicData", JSON.stringify(data));

    // Navigate to dashboard
    navigate("/clinic-dashboard");
  };

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center py-20">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          Register Your Clinic
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Clinic Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Clinic Name
            </label>
            <input
              type="text"
              name="name"
              value={clinic.name}
              onChange={handleClinicChange}
              placeholder="Enter clinic name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-1">
              Clinic Address
            </label>
            <input
              type="text"
              name="address"
              value={clinic.address}
              onChange={handleClinicChange}
              placeholder="Enter clinic address"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={clinic.phone}
              onChange={handleClinicChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Doctors */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Doctors
            </h2>

            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="relative border rounded-md p-4 mb-4"
              >

                {doctors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDoctor(index)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    ✕
                  </button>
                )}

                <p className="mb-2 font-medium">
                  Doctor {index + 1}
                </p>

                <input
                  type="text"
                  name="name"
                  value={doctor.name}
                  onChange={(e) => handleDoctorChange(index, e)}
                  placeholder="Doctor Name"
                  className="w-full border rounded-md px-3 py-2 mb-2"
                />

                <input
                  type="text"
                  name="specialization"
                  value={doctor.specialization}
                  onChange={(e) => handleDoctorChange(index, e)}
                  placeholder="Specialization"
                  className="w-full border rounded-md px-3 py-2 mb-2"
                />

                <input
                  type="text"
                  name="experience"
                  value={doctor.experience}
                  onChange={(e) => handleDoctorChange(index, e)}
                  placeholder="Experience (years)"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addDoctor}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md"
            >
              + Add Another Doctor
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Register Clinic
          </button>

        </form>
      </div>
    </section>
  );
}

export default RegisterClinic;