import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [fname, setFirstName] = useState('');

  const handleChange = (e) => {
		console.log(e.target.value);
    setFirstName(e.target.value);
	};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="file" accept="video/*;capture=camcorder" value={fname} onChange={handleChange}/>
        hiiii
        <p>{fname}</p>
      </header>
    </div>
  );
}

export default App;
