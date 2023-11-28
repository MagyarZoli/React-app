import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">App </Link>
      <Link to="/home">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/contact">Contact Us </Link>
    </nav>
  );
}

export function Home() {
  return (
    <div>
      <Nav />
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Nav />
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return (
    <div>
      <Nav />
      <h1>App</h1>
    </div>
  );
}