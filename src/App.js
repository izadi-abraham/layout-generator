import React from 'react';
import './App.scss';

function App() {

  const renderLayout = () => {
    const regNumber = /\d+/g;
    const text = "4sm/xl/2l";
    const textArray = text.split("/");
    let renderContent = "";

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
  };

  const renderSM = () => "<div class='sm col-6'></div>";
  const renderL = () => "<div class='l col-12'></div>";
  const renderXL = () => "<div class='xl col-12'></div>";
  const handleChange = (e) => {
    console.log("change:",e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <label>
            Pick your favorite flavor:
            <select onChange={handleChange}>
              <option value="xl/2l">xl/2l</option>
              <option value="4sm/xl/2l">4sm/xl/2l</option>
              <option value="l/4sm/xl">l/4sm/xl</option>
              <option value="2sm/l/4xl">2sm/l/4xl</option>
            </select>
          </label>
        </div>
      </div>
      {renderLayout()}
    </div>
  );
}

export default App;
