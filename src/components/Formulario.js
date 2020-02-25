import React from "react";
export default function Formulario(props) {
  return (
    <form>
      <div className="input-container">
        <input type="text" value={props.username || ""} />
      </div>
      <div className="input-container">
        <input type="password" value={props.password || ""} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}