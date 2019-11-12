import React from "react";

function RenderLayout (props) {

    const regNumber = /\d+/g;
    const text = "4sm/xl/2l";
    const textArray = text.split("/");
    let renderContent = "";


    const renderSM = () => "<div class='sm col-6'></div>";
    const renderL = () => "<div class='l col-12'></div>";
    const renderXL = () => "<div class='xl col-12'></div>";

    for (let item of textArray) {
      let switchItem = item.replace(regNumber, '');
      let itemNumber = parseInt(item, 10);
      if (isNaN(itemNumber)) itemNumber = 1;

      switch (switchItem) {
        case 'sm':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderSM();
          }
          break;
        case 'l':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderL();
          }
          break;
        case 'xl':
          for (let j = 0; j < itemNumber; j++) {
            renderContent += renderXL();
          }
          break;
        default:
      }
    }



    return <div className="row" dangerouslySetInnerHTML={{__html: renderContent}}/>;


}

export default RenderLayout;