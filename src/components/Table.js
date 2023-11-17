import React from "react";
import { TableItem } from "./TableItem";


export function Table({ entries, handleEditForm, bodyRef }) {
  //getting current date
  const currentDate = new Date();
  const date = `${currentDate.getDate().toString().padStart(2, "0")}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${(currentDate.getFullYear() % 100)
      .toString()
      .padStart(2, "0")}`;

  // total in/out calculation
  const totalIn = entries.reduce(
    (total, item) => (item.balance > 0 ? (total += item.balance) : total),
    0
  );
  const totalOut = entries.reduce(
    (total, item) => (item.balance < 0 ? (total += item.balance) : total),
    0
  );
  //--------
  return (
    <div className="list-wrapper">
      <div className="header">
        <div className="row">
          <div>
            <p>Today's entries</p>
            <p>{date}</p>
          </div>
          <div>
            <p>Total IN</p>
            <p className="plus">₹{totalIn}</p>
          </div>
          <div>
            <p>Total OUT</p>
            <p className="minus">₹{Math.abs(totalOut)}</p>
          </div>
        </div>
      </div>

      <div className="list-body" ref={bodyRef}>
        {entries.map((entry) => {
          return (
            <TableItem
              entry={entry}
              key={entry.id}
              handleEditForm={handleEditForm} />
          );
        })}
      </div>
    </div>
  );
}
