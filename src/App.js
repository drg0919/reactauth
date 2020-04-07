import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import './Components.css';
import './App.css';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';
import Login from './components/Login';
import {Private,Protected} from './components/Private';

const homePage = () => <Canvas >
    <div style={{flexflow: 'column nowrap'}}>
    <h1>Welcome</h1>
    <h2>To login in, enter</h2>
    <h3>Email = foobar@example.com</h3>
    <h3>Password = hellothere1234</h3>
    </div>
  </Canvas>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => homePage()} />
        <Route exact path="/public-route" component={(rpr) => <Canvas {...rpr}><h1>This is a public route</h1></Canvas>} />
        <Route exact path="/login" component={(rpr) => <Canvas><Login {...rpr}/></Canvas>} />
        <PrivateRoute exact path="/protected-route-1" component={Private} alert="Please login to continue"/>
        <PrivateRoute exact path="/protected-route-2" component={Protected} alert="Please login to continue"/>
      </Switch>
    </div>
  );
}

export default App;
