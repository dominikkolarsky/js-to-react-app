import React from "react";

export default function KrmivoExtrasPicker({
  avaiableExtras: extras,
  onExtraSelected,
}) {
  const handleChange = (event) => {
    onExtraSelected(event.target.value);
  };

  return (
    <div>
      <h3>Vlastnosti krmiva: </h3>

      <div>
        {extras.map((item) => (
          <label key={item.id}>
            <input
              value={item.id}
              type="checkbox"
              checked={item.isChecked}
              onChange={handleChange}
            />
            {item.value}
            <br />
          </label>
        ))}
      </div>
    </div>
  );
}
