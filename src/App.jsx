import logo from './logo.svg';
import './App.scss';
import Display from './components/display/Display';
import NumInput from './components/numInput/NumInput';
import TipInput from './components/tipInput/TipInput';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState();
  const [diners, setDiners] = useState();
  const [tip, setTip] = useState();

  console.log(typeof bill)

  return (
    <div className="App">
      <main className="cont">
        <section className='cont__input-sect'>
          <NumInput type="bill" sVar={bill} setSVar={setBill}/>
          <TipInput tip={tip} setTip={setTip}/>
          <NumInput type="people" sVar={diners} setSVar={setDiners}/>
        </section>

        <Display
        bill={bill}
        setBill={setBill}
        diners={diners}
        setDiners={setDiners}
        tip={tip}
        setTip={setTip}
        />
      </main>
    </div>
  );
}

export default App;
