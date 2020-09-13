import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import Shorten from './components/Shorten';


const App = () => {

    return (
        <div style={{ padding : '50px' }}>
                <Link to="/">Home</Link> | <Link to="/stats">Stats</Link> <br /><br />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/stats" component={Stats} />
                    <Route exact path="/*" component={Shorten} />
                </Switch>
        </div>
    );
}


export default App;