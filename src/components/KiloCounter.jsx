import React from "react";

export default function KiloCounter({ onKiloCounterChange, counterValue }) {
  const handleChange = (event) => {
    onKiloCounterChange(event.target.value);
  };

  return (
    <div>
      <h3>Zadejte počet kilo:</h3>
      <input
        type="number"
        min="0"
        value={counterValue}
        onChange={handleChange}
      ></input>
    </div>
  );
}
