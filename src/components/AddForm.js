import React, { useState } from "react";


export function AddForm({
  setShowForm, handleAddEntry, clickedId, editForm, handleUpdateForm, handleRemoveForm,
}) {
  const [amount, setAmount] = useState(
    editForm ? Math.abs(editForm.balance) : ""
  );
  const [type, setType] = useState(editForm.type);
  const [text, setText] = useState(editForm ? editForm.text : "");
  const [inOut, setInOut] = useState(editForm?.balance < 0 ? "out" : "in");

  console.log(editForm);

  let newEntry = {
    id: editForm ? editForm.id : Date.now(),
    balance: editForm
      ? inOut === "out"
        ? -amount
        : amount
      : clickedId === "out"
        ? -amount
        : amount,
    type,
    text,
  };
  console.log(newEntry);

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;
    editForm ? handleUpdateForm(newEntry) : handleAddEntry(newEntry);
  }

  return (
    <div>
      <form
        className={`add-form ${clickedId === "out" || inOut === "out" ? "out" : "in"}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))} />
        <div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>cash</option>
            <option>online</option>
          </select>
          {editForm && (
            <select value={inOut} onChange={(e) => setInOut(e.target.value)}>
              <option>{inOut === "in" ? "in" : "out"}</option>
              <option>{inOut === "in" ? "out" : "in"}</option>
            </select>
          )}
        </div>
        <input
          type="text"
          placeholder="Description..."
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <div className="btn-wrapper">
          <button>Add</button>
          {editForm && <button>delete</button>}
        </div>
        <svg
          onClick={() => handleUpdateForm(editForm)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="rm-btn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </form>
    </div>
  );
}
