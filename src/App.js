import React, { Component } from 'react';
import './App.css';
import ChangeOption from './Component/ChangeOption';
import ViewContent from './Component/ViewContent';
import ViewTittle from './Component/ViewTittle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ABC",
      first_Sec: 'first',
      number: 0,
      workStatus: "",
      arr: ["06:00 - 11:00", "11:00 - 11:30", "11:30 - 14:30"],
      incident: 0
    }
  }

  onInputName = (event) => {
    let target = event.target
    let value = target.value
    this.setState({
      name: value
    })
  }

  onInput = (event) => {
    let target = event.target
    let value = target.value
    this.setState({
      number: value
    })
    console.log(event.target.value)
  }

  render() {
    let date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.getMonth()
    if (day === 1) {
      month += 0
    } else {
      month += 1
    }
    month = (month < 10) ? `0${month}` : month;


    return (
      <>
        
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <ChangeOption 
            onInputNameChange = {this.onInputName}
            onInputChange = {this.onInput}
          />
        </div>
        
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <ViewTittle 
            nameTittle = {this.state.name}
            yearTittle = {year}
            monthTittle = {month}
            dayTittle = {day}
            incidentTittle = {this.state.incident}
        />
          <ViewContent 
            nameContent = {this.state.name}
            monthContent = {month}
            dayContent = {day}
            numberContent = {this.state.number}
            incidentContent = {this.state.incident}
            arrContent = {this.state.arr}
          />
        </div>

      </>

    )
  }
}

export default App;