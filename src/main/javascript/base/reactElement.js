ReactDOM.render(
  React.createElement(
    "h1",
    null,
    "Getting Started with React"
  ),
  document.querySelector("#root1")
);

ReactDOM.render(
  React.createElement(
    "ul",
    { style: { color: "blue" } },
    React.createElement(
      "li",
      null,
      "Monday"
    ),
    React.createElement(
      "li",
      null,
      "Tuesday"
    )
  ),
  document.querySelector("#root2")
);