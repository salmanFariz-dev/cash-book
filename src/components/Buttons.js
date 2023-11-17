import React from "react";


export function Buttons({ text, onClick }) {
  return (
    <button onClick={() => onClick(text)} className={text}>
      {text}
    </button>
  );
}
