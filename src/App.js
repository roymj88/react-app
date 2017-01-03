import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    let dummy = this.props.dummy
    return (
        <div> 
          <h1>{txt}</h1>
          <h3>{dummy}</h3>
        </div>
      )
  }
}


App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  cat: 5,
  txt: "This is the default value",
  dummy: "This is the default text"
}

export default App