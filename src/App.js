// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Metronome</h1>
      <p>BPM: {}</p>
      <input 
        type="range"
        min="40"
        max="280"
        step="1"
        onChange={() => { alert(`Works`); }}
      />
    </div>
  );
}

export default App;
