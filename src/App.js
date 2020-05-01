import React, { Component } from 'react';
import './App.css';
import WebWorker from './Workers/workerSetup';
import worker from './Workers/worker';

class App extends Component {

  componentDidMount() {
    this.worker = new WebWorker(worker);
    this.worker.addEventListener('message', event => {
      const data = event.data;
      console.log('data from web worker', data)
    });
  }

  callWorker = () => {
    this.worker.postMessage(5);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This repo explain how we can use web workers in react js

        </p>
          <button
            onClick={this.callWorker}
          >Click Executing web worker</button>
        </header>
      </div>
    );
  }

}

export default App;
