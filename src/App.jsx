import logo from './logo.svg';
import './App.scss';
import Display from './components/display/Display';
import NumInput from './components/numInput/NumInput';
import TipInput from './components/tipInput/TipInput';

function App() {
  return (
    <div className="App">
      <main className="cont">
        <section className='cont__input-sect'>
          <NumInput/>
          <TipInput/>
          <NumInput/>
        </section>

        <Display/>
      </main>
    </div>
  );
}

export default App;
