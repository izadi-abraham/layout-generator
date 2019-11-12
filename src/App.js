import React from 'react';
import RenderLayout from './components/RenderLayout';
import DropDownList from './components/DropDownList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: ''
    };
  }

   handleChange = async (selectedValue) => {

    console.log("change:", selectedValue.target.value);
    await this.setState({selectedValue: selectedValue.target.value});
    console.log(this.state.selectedValue);

  };

  render() {
    return (
      <div className="container-fluid">
        <DropDownList
          handleChange={this.handleChange}
          selectedValue={this.state.selectedValue}
        />
        <RenderLayout selectedValue={this.state.selectedValue}/>
      </div>
    );
  }
}


export default App;





