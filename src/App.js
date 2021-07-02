
import './App.css';
import Header from './header';
import Nav from './nav';
import Equipo from './equipo';
import Servicios from './servicios';
import Footer from './footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error404 from './error404';
import Perros from './Perros';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Nav/>
       
              <Switch>
              <Route exact path="/">
              
                </Route>
                <Route exact path="/equipo">
                <Equipo/>
                </Route>
                <Route exact path="/servicios" sensitive>
                  <Servicios/>
                </Route>
                <Route exact path="/perros">
                  <Perros/>
                </Route>
                <Route path="*">
                  <Error404 />
                </Route>
            </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
