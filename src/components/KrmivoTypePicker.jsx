import React from "react";

export default function KrmivoTypePicker(props) {
  const handleChange = (event) => {
    props.onKrmivoSelectionChange(event.target.value);
  };

  return (
    <div>
      <div>
        <h3>Vyberte druh: </h3>
        <select onChange={handleChange}>
          {props.avaiableKrmivos.map((krmivo) => (
            <option key={krmivo.id}
              value={krmivo.id}
              name="krmivo"
              checked={krmivo.isChecked}
              >{krmivo.value}</option>
          ))}
        </select>

      </div>
    </div>
  );
}
