import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage.js';

let NavBar = () =>
    <div>
        <a href="#home">home</a>
    </div>

let Router = (props) =>
    <HashRouter>
        <div>
            <NavBar/>
                <Switch>
                    <Route exact path="/home" component={Homepage}/>
                </Switch>
        </div>
    </HashRouter>

export default Router;