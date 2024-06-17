import './App.css';
import{BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import AddTimePage from './pages/AddTimePage';
import EditTimePage from './pages/EditTimePage';
//import React, { useState } from 'react';


function App() {
  //const [name, setName] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <header className="App-header">
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/info" >
              <InfoPage />
            </Route>
            <Route path="/add">
              <AddTimePage />
            </Route>
            <Route path="/edit">
              <EditTimePage />
            </Route>



          </header>
        </Router>
      </header>
    </div>
  );
}
export default App;
// */
