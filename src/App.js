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

    if (alcoholLevel < 0) {
      alcoholLevel = 0;
    }
    setResult(alcoholLevel);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row m-1 p-1">
          <header className="ownHeader col-md-6 col-xd-12 text-center">
            <h2 className="py-2">Calculating blood alcohol level</h2>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-group row my-2">
              <div className="col-md-2 col-sm-12">Weight</div>
              <input className="col-md-1 p-2 bg-light" name="weight" type="number" min="0" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
            </div>
            <div className="row my-2">
              <div className="col-md-2 col-sm-12">Bottles</div>
              <input className="col-md-1 p-2 bg-light" name="bottles" type="number" min="0" value={bottles} onChange={e => setBottles(e.target.value)}>
              </input>
            </div>
            <div className="row my-2">
              <div className="col-md-2 col-sm-12">Time</div>
              <input className="col-md-1 p-2 bg-light" name="time" type="number" min="0" value={time} onChange={e => setTime(e.target.value)}>
              </input>
            </div>
            <div className="row my-2">
              <div className="col-md-2 col-sm-12">Gender</div>
              <div className="col-md-2 col-xs-12">
                <div>
                  <input type="radio" name="gender" value="male" id="male" defaultChecked onChange={e => setGender(e.target.value)} />
                  <label for="male" className="mx-2">Male</label>
                  <div>
                    <input type="radio" name="gender" value="female" id="female" onChange={e => setGender(e.target.value)} />
                    <label for="female" className="mx-2">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xd-12 text-center result">
              <output className="text-center my-1 p-2">{result.toFixed(2)}</output>
            </div>
            <div className="col-md-6 col-xd-12 text-center mt-3">
              <button className="btn btn-danger">Calculate</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
