import React from "react";
import { BalancePanel } from "./BalancePanel";

export function BalanceDisplay({ entries }) {
  let total = entries.reduce((total, entry) => (total += entry.balance), 0);
  let cash = entries.reduce(
    (total, entry) => entry.type === "cash" ? (total += entry.balance) : total,
    0
  );
  let online = entries.reduce(
    (total, entry) => entry.type === "online" ? (total += entry.balance) : total,
    0
  );

  return (
    <div className="balance-display">
      <BalancePanel balance={total} type={"total"} />
      <BalancePanel balance={cash} type={"cash"} />
      <BalancePanel balance={online} type={"online"} />
    </div>
  );
}
