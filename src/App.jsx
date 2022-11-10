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
  const [customTip, setCustomTip] = useState();

  console.log(typeof bill)

  return (
    <div className="App">
      <span id="logo">SPLITTER</span>
      <main className="cont">
        <section className='cont__input-sect'>
          <NumInput type="bill" sVar={bill} setSVar={setBill}/>
          <TipInput tip={tip} setTip={setTip} customTip={customTip} setCustomTip={setCustomTip}/>
          <NumInput type="people" sVar={diners} setSVar={setDiners}/>
        </section>

        <Display
        bill={bill}
        setBill={setBill}
        diners={diners}
        setDiners={setDiners}
        tip={tip}
        setTip={setTip}
        customTip={customTip}
        setCustomTip={setCustomTip}
        />

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded with ♥ by <a href="https://github.com/Emvil-git" target="_blank">Emvil</a>.
      </div>
      </main>

      
    </div>
  );
}

export default App;
