
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carusal from './components/Carusal';
import NearAndReach from './components/NearAndReach';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Carusal/>
      <NearAndReach/>
    </div>
  );
}

export default App;
