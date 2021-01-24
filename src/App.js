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
      <h2>Calculating blood alcohol level</h2>
      <form onSubmit={handleSubmit} className="container-fluid">

        <div className="form-group row">

          <div>
            <div className="col-sm-2 col-xs-12 p-3">Weight</div>
            <input className="col-3 p-3" name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
          </div>
          <div>
            <div className="col-sm-2 col-xs-12 p-3">Bottles</div>
            <input className="col-3 p-3" name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}>
            </input>
          </div>
          <div>
            <div className="col-sm-2 col-xs-12 p-3">Time</div>
            <input className="col-3 p-3" name="time" type="number" value={time} onChange={e => setTime(e.target.value)}>
            </input>
          </div>
          <div>
            <div className="col-sm-2 col-xs-12 p-3">Gender</div>
            <input type="radio" name="gender" value="male" id="male" defaultChecked onChange={e => setGender(e.target.value)} />
            <label className="col-sm-2 col-xs-12 p-3" for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" onChange={e => setGender(e.target.value)} />
            <label className="col-sm-2 col-xs-12 p-3" for="female">Female</label>
          </div>
          <div>
            <output className="bg-danger col-3 text-center my-3">{result.toFixed(2)}</output>
          </div>
          <div>
            <button className="btn btn-primary col-3">Calculate</button>
          </div>
        </div>
      </form>

    </>
  );
}

export default App;
