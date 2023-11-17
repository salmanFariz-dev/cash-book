import React, { useState } from "react";
import { BalanceDisplay } from "./BalanceDisplay";
import { EntriesList } from "./EntriesList";

const intialItems = [
  { id: 1365, balance: 2000, type: "cash", text: "pocket money" },
  { id: 1245, balance: 250, type: "online", text: "debt" },
  { id: 1547, balance: -300, type: "cash", text: "fuel" },
  { id: 1902, balance: -50, type: "online", text: "coffee" },
  { id: 1188, balance: -550, type: "cash", text: "grocery" },
];

function App() {
  const [entries, setEntry] = useState(intialItems);
  const [showForm, setShowForm] = useState(false);
  const [clickedId, setClickedId] = useState("");

  function handleBtnClick(id) {
    setClickedId(id);
    setShowForm(true);
  }

  return (
    <div className={`app ${showForm ? "unclickable" : ""}`}>
      {showForm && <div className="blur-bg"></div>}
      <h2>Cash Book</h2>
      <BalanceDisplay entries={entries} />
      <EntriesList
        entries={entries}
        setEntry={setEntry}
        showForm={showForm}
        setShowForm={setShowForm}
        handleBtnClick={handleBtnClick}
        clickedId={clickedId}
      />
    </div>
  );
}

export default App;
