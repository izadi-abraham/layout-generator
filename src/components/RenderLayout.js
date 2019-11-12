import React from "react";

function RenderLayout (props) {

    const regNumber = /\d+/g;
    let text = props.selectedValue.toLowerCase();
    const textArray = text.split("/");
    let renderContent = "";
    let slotNumber = 1;

    const renderSM = () => `<div class='sm col-6'><h1>Slot ${slotNumber}</h1></div>`;
    const renderL = () => `<div class='l col-12'><h1>Slot ${slotNumber}</h1></div>`;
    const renderXL = () => `<div class='xl col-12'><h1>Slot ${slotNumber}</h1></div>`;


    for (let item of textArray) {
      let switchItem = item.replace(regNumber, '');
      let itemNumber = parseInt(item, 10);
      if (isNaN(itemNumber)) itemNumber = 1;

      switch (switchItem) {
        case 'sm':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderSM();
            slotNumber +=1;
          }
          break;
        case 'l':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderL();
            slotNumber +=1;
          }
          break;
        case 'xl':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderXL();
            slotNumber +=1;
          }
          break;
        default:
      }
    }



    return <div className="row" dangerouslySetInnerHTML={{__html: renderContent}}/>;


}

export default RenderLayout;