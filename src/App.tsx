import './App.css';
import FlavanoidsCalculations from './components/FlavanoidsCaluclations';
import GammaCalculationsTable from './components/GammaCalculationsTable';

function App() {



  return (
    <div className="container">
      <div className='text'><b>
        Calculations for Mean, Median, Mode</b></div>
     <FlavanoidsCalculations/>
     <GammaCalculationsTable/>
    </div>
  );
}

export default App;
