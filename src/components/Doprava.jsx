import React from "react";

export default function Doprava(props) {
  const handleChange = (event) => {
    props.onDopravaSelectionChange(event.target.value);
  };

  return (
    <div>

      <h3>Vyberte dopravu: </h3>
      <div>
        {props.avaiableDoprava.map((doprava) => (
          <label key={doprava.id}>
            <input
              value={doprava.id}
              type="radio"
              checked={doprava.isChecked}
              onChange={handleChange}
            />
            {doprava.value}
            <br />
          </label>
        ))}
      </div>
    </div>

  );
}
