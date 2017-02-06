import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'This is the state txt'
    }
  }
  render(){
    return (
        <div> 
          <h3>{this.state.txt}</h3>
        </div>
      )
  }
}

export default App