import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App' 
class Form extends React.Component {
    render() {
      return (
        <div className="form">         
            <App name={"SIGN IN TO YOUR ACCOUNT"} />          
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );