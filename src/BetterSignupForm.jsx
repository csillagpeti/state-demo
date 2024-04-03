import { useState } from "react";

function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstName}
        id="firstname"
        name="firstName"
        onChange={handleChange}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
