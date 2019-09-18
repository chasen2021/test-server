import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert'




class App extends React.Component{
  state = {
    text: ''
  }

  onPush = () => {
    this.setState({
      text:"Shut up Cracker"
    })
  }

  render(){
    return (
      <body class = 'hemp'>
      <div class = "app">
          
        
        
        <br/>
        <h1 class = 'header'>Dumb Dairy
          <Badge variant = 'success'>Write down your feelings now</Badge>
        </h1>
        <br/>
        <p>The Dumb dairy is a helpful tool to vent your frustration! angry at work? write about it here, press submit, and get a delightful response.<p/>
        
        <br/>
        <Button variant = 'outline-warning' size = 'lg' onClick={this.onPush}>Press</Button>
        <br/>
        <br/>
        <br/>
        <h2>{this.state.text}</h2>

        



      </div>
      </body>
    )
  }

}


export default App;
