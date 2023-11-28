import { useState } from "react";

function UseState() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="UseState">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default UseState;