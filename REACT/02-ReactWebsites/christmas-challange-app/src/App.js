import logo from './logo.svg';
import './App.css';
import DaysUntil from './components/DaysUntil';
import Present from './components/Present';
import GiftTable from './components/GiftTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DaysUntil/>
      </header>
      
      <div>
        <GiftTable/>
       
      </div>
    </div>
  );
}

export default App;
