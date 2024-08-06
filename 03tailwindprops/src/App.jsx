import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"vihan",
    age:20
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-emerald-600 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username='chaicode' btnText='chlo →' />
      <Card username='chaipeelo' btnText='chlo →'/>
    </>
  );
}

export default App;
