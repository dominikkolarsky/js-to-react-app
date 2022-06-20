import "./App.css";
import React, { useEffect, useState } from "react";

// krmivo picker
import avaiableKrmivos from "./avaiableKrmivos";
import KrmivoTypePicker from "./components/KrmivoTypePicker";

// doprav
import avaiableDoprava from "./avaiableDoprava.json"
import Doprava from "./components/Doprava";

// kilo
import KiloCounter from "./components/KiloCounter";

// krmivo extras kvality
import avaiableExtras from "./extras.json";
import KrmivoExtrasPicker from "./components/KrmivoExtrasPicker";

// souhrn
import KrmivoSumUpList from "./components/KrmivoSumUpList";


function App() {


  // doprava
  const [selectedDoprava, setSelectedDoprava] = useState();
  const [dopravas, setDopravas] = useState(avaiableDoprava);

  const handleDopravaSelected = (selectedDopravaId) => {
    let doprava = dopravas.find((x) => x.id === parseInt(selectedDopravaId));
    setSelectedDoprava(doprava);
    console.log(doprava);

    setDopravas((prevState) => handleDoprava(prevState, selectedDopravaId));
  };

  function handleDoprava(prevstate, selectedDopravaId) {
    return prevstate.map((doprava) =>
      doprava.id === parseInt(selectedDopravaId)
        ? { ...doprava, isChecked: !doprava.isChecked }
        : { ...doprava, isChecked: false }
    );
  }
  // doprava end


  // krmivo
  const [selectedKrmivo, setSelectedKrmivo] = useState();
  const [krmivos, setKrmivos] = useState(avaiableKrmivos);

  const handleKrmivoSelected = (selectedKrmivoId) => {
    let krmivo = krmivos.find((x) => x.id === parseInt(selectedKrmivoId));
    setSelectedKrmivo(krmivo);
    console.log(krmivo);
    setKrmivos((prevState) => handleKrmivo(prevState, selectedKrmivoId));
  };

  function handleKrmivo(prevstate, selectedKrmivoId) {
    return prevstate.map((krmivo) =>
      krmivo.id === parseInt(selectedKrmivoId)
        ? { ...krmivo, isChecked: !krmivo.isChecked }
        : { ...krmivo, isChecked: false }
    );
  }
  // end krmivo

  // pocet
  const [selectedKiloCount, setSelectedKiloCount] = useState(0);

  const handleKiloCounterChanged = (KiloCount) => {
    console.log(KiloCount);

    setSelectedKiloCount(KiloCount);
  };
  // end pocet

  // extras kvality
  const [extras, setExtras] = useState(avaiableExtras);

  const handleExtraSelectionChanged = (selectedExtrasId) => {


    setExtras((prevState) => handleExtras(prevState, selectedExtrasId));
    console.log(extras);

  };

  const handleExtras = (prevState, selectedExtrasId) => {
    return prevState.map((item) =>
      item.id === parseInt(selectedExtrasId)
        ? { ...item, isChecked: !item.isChecked }
        : item
    );
  };
  // end extras

  // reset
  const resetState = () => {
    setKrmivos(avaiableKrmivos);
    setSelectedKrmivo();
    setSelectedDoprava();
    setSelectedKiloCount(0);
    setExtras(avaiableExtras);
  };



  // funkce na pocitani
  // const handleOrderSubmit = () => {
  //   alert(`Vaše objednávka za ${calculateTotalPrice()},- kč byla odeslána. `);
  //   resetState();
  // };

  // const calculateTotalPrice = () => {
  //   return parseInt(selectedKrmivo.price) * selectedKiloCount;
  // };

  return (
    <div>
      <fieldset>
        <legend>
          <h2>Objednávka krmiva:</h2>
        </legend>
        {/* krmivo typ */}
        <KrmivoTypePicker
          avaiableKrmivos={krmivos}
          onKrmivoSelectionChange={handleKrmivoSelected}
        />

        {/* kilo pocet */}
        <KiloCounter
          counterValue={selectedKiloCount}
          onKiloCounterChange={handleKiloCounterChanged}
        />

        <KrmivoExtrasPicker
          avaiableExtras={extras}
          onExtraSelected={handleExtraSelectionChanged}
        />

        {/* doprava */}
        <Doprava
          avaiableDoprava={dopravas}
          onDopravaSelectionChange={handleDopravaSelected} />

        {/* souhrn */}
        <KrmivoSumUpList
          selectedKrmivo={selectedKrmivo}
          selectedKrmivoCount={selectedKiloCount}
          extras={extras.filter((x) => x.isChecked)}
          doprava={dopravas.filter((x) => x.isChecked)}

        />

        {/* {selectedKiloCount > 0 && selectedKrmivo !== undefined && (
          <button onClick={handleOrderSubmit}>Odeslat objednávku</button>
        )} */}
      </fieldset>
    </div>
  );
}

export default App;
