import { useState, useEffect } from "react";

function UseEffect() {
  const [emotion, setEmotion] = useState("happy");
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);
  return (
    <div className="UseEffect">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default UseEffect;