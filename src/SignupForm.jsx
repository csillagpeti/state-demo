import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  }
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  }
  const handleSubmit = () => {
    console.log(firstName,lastName)
  }

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstName}
        onChange={updateFirstName}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastName}
        onChange={updateLastName}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
