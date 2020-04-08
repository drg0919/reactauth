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
        <Route exact path="/reactauth/" component={() => homePage()} />
        <Route exact path="/reactauth/public-route" component={(rpr) => <Canvas {...rpr}><h1>This is a public route</h1></Canvas>} />
        <Route exact path="/reactauth/login" component={(rpr) => <Canvas><Login {...rpr}/></Canvas>} />
        <PrivateRoute exact path="/reactauth/protected-route-1" component={Private} alert="Please login to continue"/>
        <PrivateRoute exact path="/reactauth/protected-route-2" component={Protected} alert="Please login to continue"/>
        <Route path="*" component={() => <Canvas><h2>404! Not found</h2></Canvas>} />
      </Switch>
    </div>
  );
}

export default App;
