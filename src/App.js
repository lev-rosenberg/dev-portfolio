import './App.css';
import {useState, useEffect} from 'react';
import Home from './Home';
import Rain from './components/rain';

function App() {
  const [showHome, setShowHome]= useState(false)

  useEffect(() => {
    if (showHome) {
      const home = document.getElementById('home');
      home.classList.add('fade-in');
    }
  },[showHome])

  return (
    <div className="App">
      <Rain callHome = {setShowHome}/>
      {showHome ? <Home/> : null}
    </div>
  );
}
export default App;
