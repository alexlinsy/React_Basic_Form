import React, { /*useRef,*/ useState } from "react";
import "./styles.css";

export default function App() {
  //const usernameInputRef = useRef();
  const [username, setUsername] = useState(() => "");
  const properUserName = username === username.toLocaleLowerCase();
  const error = properUserName ? null : "Username must be lower case";
  function handleChange(event) {
    setUsername(event.target.value.toLocaleLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    //const userName = event.target.elements.userNameInput.value;
    //const userName = usernameInputRef.current.value;
    alert(`You entered ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          id="userNameInput"
          //ref={usernameInputRef}
          type="text"
          onChange={handleChange}
          value={username}
        />
        <div style={{ color: "red" }}>{error}</div>
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
