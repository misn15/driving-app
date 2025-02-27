import './App.css';
// import { Button }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewButton from './components/ReviewButton.js';
import React from 'react';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <div>
      <NavBar/>
        <div className="Review-button">
          <div style={{ height: '25vh', width: '50%'}}>
            <p>Welcome! If you have found this website, then you have had the unfortunate pleasure of driving near me. 
            Feel free to leave a review of my driving below. Please be kind. I also know I'm not a great driver.
            </p>
          <div/>
        </div>
        <ReviewButton/>
      </div>  
    </div>
  );
}

export default App;
