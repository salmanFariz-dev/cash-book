import React, { useRef, useState } from "react";
import { Buttons } from "./Buttons";
import { AddForm } from "./AddForm";
import { Table } from "./Table";

export function EntriesList({
  entries, setEntry, showForm, setShowForm, handleBtnClick, clickedId,
}) {
  const tBodyRef = useRef(null);
  const [editForm, setEditForm] = useState("");

  function handleAddEntry(entry) {
    setEntry((state) => [...state, entry]);
    setShowForm(false);
    tBodyRef.current.scrollTop = tBodyRef.current.scrollHeight;
  }

  function handleEditForm(entry) {
    setEditForm(entry);
    setShowForm(true);
  }

  function handleUpdateForm(entry) {
    setEntry(
      entries.map((ent) => {
        return ent.id === entry.id ? entry : ent;
      })
    );
    setShowForm(false);
    setEditForm("");
  }

  function handleRemoveForm(id) {
    setEntry(entries.filter((entry) => entry.id !== id));
    setShowForm(false);
    setEditForm("");
  }

  return (
    <div className="list">
      <Table
        handleAddEntry={handleAddEntry}
        handleEditForm={handleEditForm}
        entries={entries}
        bodyRef={tBodyRef} />
      <div className="btns">
        <Buttons onClick={handleBtnClick} text="in" />
        <Buttons onClick={handleBtnClick} text="out" />
      </div>
      {showForm && (
        <AddForm
          setShowForm={setShowForm}
          clickedId={clickedId}
          handleAddEntry={handleAddEntry}
          editForm={editForm}
          handleUpdateForm={handleUpdateForm}
          handleRemoveForm={handleRemoveForm} />
      )}
    </div>
  );
}
