import React from 'react';
import './App.scss';

function App() {

  function renderLayout() {

    const text = "2sm/4l/xl";
    let textArray = text.split("/");
    let renderContent = "";
    let numberOfRenderContent = text.match(/\d+/g).map(item => parseInt(item,10));

    console.log(numberOfRenderContent);

    for (let i = 0; i < textArray.length; i++) {
      // console.log(textArray[i]);



      switch (textArray[i]) {
        case 'sm':
          renderContent += "<div className=\"sm col-6\"></div>";
          break;
        case 'l':
          renderContent += "<div className=\"l col-12\"></div>";
          break;
        case 'xl':
          renderContent += "<div className=\"xl col-12\"></div>";
          break;
        default:
          console.log('default case');

      }
    }
    return <div className="container-fluid main" dangerouslySetInnerHTML={createMarkup(renderContent)}/>;



  }

  function createMarkup(stringInput) {
    return {__html: stringInput};
  }

  function sm() {
    return (
      <div className="sm col-6"></div>
    );

  }

  function l() {
    return (
      <div className="l col-12"></div>
    );

  }

  function xl() {
    return (
      <div className="xl col-12"></div>
    );

  }


  return (

    <div className="container-fluid row">
      {renderLayout()}
    </div>


  );
}

export default App;
