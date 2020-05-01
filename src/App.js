import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const usernameInputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements.userNameInput.value;
    //const userName = usernameInputRef.current.value;
    alert(`You entered ${userName}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input id="userNameInput" ref={usernameInputRef} type="text" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
