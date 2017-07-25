import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      cat: 0
    }
  }

  update(event) {
    this.setState({ txt: event.target.value })
  }

  render() {
    return (
    <div>
      <h1>{this.state.txt} - {this.state.cat}</h1>
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
    </div>
    )
  }
}

const Widget = (props) =>
  <input type="text"
    onChange={props.update} />

export default App;
