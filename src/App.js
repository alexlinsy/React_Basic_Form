import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const usernameInputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    alert(usernameInputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={usernameInputRef} type="text" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
