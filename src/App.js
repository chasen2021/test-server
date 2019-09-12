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
        <h1 class = 'header'>Press the Button
          <Badge variant = 'success'>Now</Badge>
        </h1>
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
