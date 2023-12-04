import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button name ="Sendar"/>
        <Card img="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" description="Architect & Engineer" />
      </header>

    </div>
  );
}

export default App;
