import { useEffect, useState } from "react";

function ClinicDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("clinicData"));
    setData(stored);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {data.clinic.name}
      </h1>

      <p>{data.clinic.address}</p>
      <p>{data.clinic.phone}</p>

      <h2 className="mt-4 text-xl font-semibold">Doctors</h2>

      {data.doctors.map((doc, i) => (
        <div key={i} className="border p-3 mt-2 rounded">
          <p><strong>{doc.name}</strong></p>
          <p>{doc.specialization}</p>
          <p>{doc.experience} years</p>
        </div>
      ))}
    </div>
  );
}

export default ClinicDashboard;