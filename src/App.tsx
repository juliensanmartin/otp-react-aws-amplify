import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const signOut = () => {};
  const signIn = () => {};
  const verifyOtp = () => {};
  const verifyAuth = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some message here</p>
        <div>
          <input
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number (+XX)"
          ></input>
          <button onClick={signIn}>Get OTP</button>
        </div>
        <div>
          <input
            name="phone-number"
            id="phone-number"
            placeholder="Your OTP"
          ></input>
          <button onClick={verifyOtp}>Confirm</button>
        </div>
        <div>
          <button onClick={verifyAuth}>Am I sign in?</button>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
