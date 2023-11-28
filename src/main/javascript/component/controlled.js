import { useState } from "react";

function Controlled() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        placeholder="color title..."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        value={color}
        type="color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}

export default Controlled;