import { useEffect, useState } from "react";

export default function FormDashboard({ setIsDraft }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {

    const hasData = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    setIsDraft(hasData);

  }, [formData]);

  return (
    <form className="container">

      <input
        type="text"
        name="name"
        className="form-control mb-3"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        className="form-control mb-3"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        className="form-control mb-3"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

    </form>
  );
}