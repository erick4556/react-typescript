import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { getAllSubs } from "./services/getAllSubs";
import { Sub } from "./types";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  // const [subs, setSubs] = useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  const divRef = useRef<HTMLDivElement>(null); //Guardar un valor que va quedar guardado entre renderizado pero no va causar ningún renderizado

  useEffect(() => {
    /*  getAllSubs().then((apiSubs) => {
      const subs = mapFromApiToSubs(apiSubs);
      setSubs(subs);
    }); */

    // Otra forma de hacerlo
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((newSubsNumber) => newSubsNumber + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
