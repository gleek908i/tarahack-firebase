import React from 'react';
import defaultdataset from "./datasets"
import './assets/styles/style.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultdataset,
      open: false,
    }
  }

  render(){
    return (
        <section className="c-section">
          <div className="c-box">
          </div>
        </section>
    );
  }
}

