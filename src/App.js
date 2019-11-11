import React from 'react';
import './App.scss';

function App() {

  function sm() {
    return(
      <div className="sm col-6"></div>
    );

  }

  function l() {
    return(
      <div className="l col-12"></div>
    );

  }

  function xl() {
    return(
      <div className="xl col-12"></div>
    );

  }



  return (
    <React.Fragment>

      <div className="container-fluid row main">
        {sm()}
        {l()}
        {xl()}
      </div>

    </React.Fragment>
  );
}

export default App;
