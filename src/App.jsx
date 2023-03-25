import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";
import { useState } from "react";
import MyFormSolutionOne from "./components/MyFormSolutionOne";
import MyFormSolutionTwo from "./components/MyFormSolutionTwo";

const user = {
  name: "John Doe",
  job: "Engineer",
  hobby: "Listen to music",
};

const users = [
  {
    name: "John Doe",
    job: "Engineer",
    hobby: "Listen to music",
  },
  {
    name: "John Smith",
    job: "Programmer",
    hobby: "Running",
  },
  {
    name: "John Roe",
    job: "Farmer",
    hobby: "Swimming",
  },
  {
    name: "John Wick",
    job: "Assasin",
    hobby: "Shooting gun",
  },
];

function App() {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleFocusOut() {
    setFocus(false);
  }

  return (
    <div className="App">
      <Card user={user} />
      <List users={users} />
      <TypeMe focus={focus} onFocus={handleFocus} onFocusOut={handleFocusOut} />
      <MyFormSolutionOne />
      <MyFormSolutionTwo />
    </div>
  );
}

export default App;
