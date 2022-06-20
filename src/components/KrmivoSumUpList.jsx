import React from "react";

export default function KrmivoSumUpList({
  selectedKrmivo,
  extras,
  selectedKrmivoCount,
  doprava,
}) {


  let calculatePrice = (count, price) => {

    // let cenaDopravy = 0;
    // if (doprava.id === 1)
    //   cenaDopravy = 0;
    // else if (doprava.id === 2)
    //   cenaDopravy = parseInt(selectedKrmivo.price) * 0.1;
    // else 
    //   cenaDopravy = 250;


    return parseInt(count) * parseInt(price);
  };

  if (selectedKrmivo === undefined) {
    return <h3>Prosím vyber krmivo...</h3>;
  }

  return (
    <div>
      <div>
        <h3>Souhrn:</h3>
        {/* vybrany typ krmiva */}
        <p>{selectedKrmivo.value}</p>

        {/* extras kvalita */}
        {extras !== undefined && extras.length > 0 ? (
          extras.map((item) => <div key={item.id}>{item.value}</div>)
        ) : (
          <p>Nevybrali jste žádné extra suroviny</p>
        )}

        {/* doprava */}
        {doprava !== undefined && doprava.length > 0 ? (
          doprava.map((item) => <div key={item.id}>{item.value}</div>)
        ) : (
          <p>Nevybrali jste žádnou dopravu</p>
        )}


        {selectedKrmivoCount > 0 ? (
          <div>
            <div>{selectedKrmivoCount} ks</div>
            <div>
              {calculatePrice(selectedKrmivoCount, selectedKrmivo.price)}
              ,- kč
            </div>
          </div>
        ) : (
          <div>
            <strong>Zadejte počet kusů</strong>
          </div>
        )}
      </div>
    </div>
  );
}
