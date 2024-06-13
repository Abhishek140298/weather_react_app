import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapDisplay from './components/MapDisplay'
import FormSubmission from './components/FormSubmission';

function App() {
  return (
    <div className="App">
<FormSubmission/>
     <MapDisplay/>
    </div>
  );
}

export default App;
