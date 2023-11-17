import React from "react";


export function BalancePanel({ balance, type }) {
  return (
    <div>
      <h3 className={balance < 0 ? "minus" : "plus"}>₹{Math.abs(balance)}</h3>
      <p>{type}</p>
    </div>
  );
}
