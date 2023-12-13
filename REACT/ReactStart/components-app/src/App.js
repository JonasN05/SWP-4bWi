import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';
import List from './components/list/List';

function App() {
  var array = ["Coffe", "Tea", "Bear"]
  return (
    <div className="App">
      <header className="App-header">
        <div className="button">
          <Button name ="Sendar"/>
        </div>
        <Card img="https://www.w3schools.com/howto/img_avatar.png" name="John Doe" description="Architect & Engineer" />
        <List data={array}/>
      </header>

    </div>
  );
}

export default App;
