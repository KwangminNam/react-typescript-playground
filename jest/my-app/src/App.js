import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Timer from "./Timer";

const user = {
  name: "kwangmin",
  age: 30
};

function App() {
  return (
    <>
      <Hello user={user} />
      <Timer />
    </>
  );
}

export default App;
