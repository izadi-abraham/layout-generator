import React from 'react';
import RenderLayout from './components/RenderLayout';
import DropDownList from './components/DropDownList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
    };
  }

   handleChange = (selectedValue) => {

    console.log("change:", selectedValue.target.value);
    this.setState({selectedValue: selectedValue.target.value});

  };

  render() {
    return (
      <div className="container-fluid">
        <DropDownList handleChange={this.handleChange}/>
        <RenderLayout selectedValue={this.state.selectedValue}/></div>
    );
  }
}


export default App;





