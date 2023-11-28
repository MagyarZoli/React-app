import { useState, useEffect } from "react";

function Fetching() {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(`https://api.github.com/users/MagyarZoli`)
      .then((res) => res.json())
      .then(setData);
  }, []);
  if (data) return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
  return (
    <h1>Data</h1>
  );
}

export default Fetching;