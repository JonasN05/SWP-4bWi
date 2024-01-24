import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button name ="Hans" age="12" />
        <Button name ="Peter"/>
        <Button name ="Karl"/>
        hallo
      </header>
    </div>
  );
}

export default App;
