import { useState, useReducer } from "react";

// function UseReducer() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div className="UseReducer">
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked((check) => !check)}
//       />
//       <label>{checked ? "checked" : "not checked"}</label>
//     </div>
//   );
// }

function UseReducer() {
  const [checked, setChecked] = useReducer((check) => !check, false);
  return (
    <div className="UseReducer">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default UseReducer;