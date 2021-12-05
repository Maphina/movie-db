import './App.css'
import Home from "./components/Home";
import IndividualMovie from "./components/IndividualMovie";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieGenre from './components/MovieGenre';
function App() {
  return (
    <Router>
      <div className="App">  
        <Navbar/>
      <Switch>
        <Route path="/home" component={Home} />
         <Route exact path="/movies" component={IndividualMovie} />           
         <Route exact path="/movies/:genre" component={MovieGenre}/>
      </Switch> 
    </div>
    </Router>
    
  );  

}

export default App;
