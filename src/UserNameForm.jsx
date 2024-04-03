import { useState } from "react";

function UserNameForm() {
  const [username, setUsername] = useState("");
  function updateUsername(evt) {
    setUsername(evt.target.value);
  }
  return (
    <div>
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}

export default UserNameForm;
