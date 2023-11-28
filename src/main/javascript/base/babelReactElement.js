ReactDOM.render(
  <ul>
    <li>Wednesday</li>
    <li>Thursday</li>
  </ul>,
  document.querySelector("#root3")
);

let friday = "Friday";
let saturday = "Saturday";
ReactDOM.render(
  <ul>
    <li>{friday.toUpperCase()}</li>
    <li>{saturday}</li>
  </ul>,
  document.querySelector("#root4")
);