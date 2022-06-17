import React, { Component } from 'react';
import Ebutton from './eButton';
import Etext from './eText';
import EtextArea from './eTextArea';
export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0, currentWord : "", currentWord2: "" };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.setTextBox = this.setTextBox.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  setTextBox(e) {
    // console.log(e.target.id);
    // console.log(e.target.value);
    this.setState({
      currentWord : e.target.value,
      currentWord2: e.target.value
    });


  }


  decrementCounter(){
    this.setState({
      currentCount : this.state.currentCount - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>


        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
        <p aria-live="polite">Current word: <strong>{this.state.currentWord}</strong> </p>

 

        <Ebutton displayText="Tambah" event={this.incrementCounter} size="small"/>
        &nbsp;
        <Ebutton displayText="Kurang" event={this.decrementCounter} size="small"/>

        <Etext id="text" label="textbox standard" onChange={this.setTextBox} value={this.state.currentWord} type="text" hintMessage="cuman hint saja"/>
        <Etext id="number" label="textbox numeric" onChange={this.setTextBox} value={this.state.currentWord2} type="number"/>
        <EtextArea id="textarea" label="text area untuk alamat" rows="3"/>
      </div>
    );
  }
}
