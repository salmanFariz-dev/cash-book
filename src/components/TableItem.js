import React from "react";


export function TableItem({ entry, handleEditForm }) {
  return (
    <div className="row" onClick={() => handleEditForm(entry)}>
      <div>{entry.text}</div>
      <div className="plus">
        {entry.balance > 0 ? "₹" + entry.balance : ""}{" "}
        {entry.type === "online" && entry.balance > 0 && (
          <span className="online-tag">online</span>
        )}
      </div>
      <div className="minus">
        {entry.balance < 0 ? "₹" + Math.abs(entry.balance) : ""}{" "}
        {entry.type === "online" && entry.balance < 0 && (
          <span className="online-tag">online</span>
        )}
      </div>
    </div>
    // <li>
    //   <p>{item.text}</p>
    //   <p>{item.balance}</p>
    // </li>
  );
}
