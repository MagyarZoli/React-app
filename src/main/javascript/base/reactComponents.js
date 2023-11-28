function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}
const dishes = [
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Salmon and Potatoes"
];
const dishObj = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));
function Main(props) {
  return (
    <section>
      <ul>
        {props.dishes.map((dish) => {
          <li key={dish.id}>{dish.title}</li>
        })}
      </ul>
    </section>
  );
}
// function App() {
//   return (
//     <div>
//       <Header />
//       <Main
//         adjective="amazing"
//         dishes={dishObj}
//       />
//     </div>
//   );
// }
function App() {
  return (
    <React.Fragment>
      <Header />
      <Main
        adjective="amazing"
        dishes={dishObj}
      />
    </React.Fragment>
  );
}
ReactDOM.render(
  <App />,
  document.querySelector("#react-components")
);