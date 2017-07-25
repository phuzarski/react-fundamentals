import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  render(){
    return (
      <div>
        <Parent>
          <div className="childA"></div>
          {/* <div className="childB"></div> */}
        </Parent>
      </div>
    )
  }
}

class Parent extends React.Component {
  render() {
    console.log(this.props.children)
    let items = React.Children.map(this.props.children, child => child.props.className)
    // let items2 = React.Children.toArray(this.props.children)
    // console.log(items2)
    let items3 = React.Children.only(this.props.children)
    // console.log(items)
    console.log(items3)
    return null
  }
}
export default App;
