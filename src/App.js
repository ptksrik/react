import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsRemaining = grams - (burning * time);

    let alcoholLevel = 0;
    if (gender === 'male') {
      alcoholLevel = gramsRemaining / (weight * 0.7);
    }
     else {
      alcoholLevel = gramsRemaining / (weight * 0.6);
     }

     setResult(alcoholLevel);

  }

  return (
    <>
      <h3>Calculating blood alcohol level</h3>
      <form onSubmit={handleSubmit} className="container-fluid">
        <div className="form-group row">
          <label className="col-1">Weight</label>
          <input className="col-2" name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div className="row">
          <label className="col-1">Bottles</label>
          <input className="col-2" name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          </input>
        </div>
        <div className="row">
          <label className="col-1">Time</label>
          <input className="col-2" name="time" value={time} onChange={e => setTime(e.target.value)}>
          </input>
        </div>
        <div>
          <label className="col-1">Gender</label>
          <input type="radio" name="gender" value="male" id="male" defaultChecked onChange={e => setGender(e.target.value)} /><label for="male">Male</label>
          <input type="radio" name="gender" value="female" id="female" onChange={e => setGender(e.target.value)} /><label for="female">Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button className="btn btn-primary">Calculate</button>
        
      </form>
    </>
  );
}

export default App;
