import React from 'react';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';
import Homepage from './Homepage.js';
import About from './About.js'
import ImageMarket from './ImageMarket.js';
import VideoMarket from './VideoMarket.js';

let NavBar = () =>
    <div>
        <NavLink className="sidebarLinks" to="/home">home</NavLink>
        <NavLink className="sidebarLinks" to="/about">about</NavLink>
        <NavLink className="sidebarLinks" to="/imagemarket">imagemarket</NavLink>
        <NavLink className="sidebarLinks" to="/videomarket">videomarket</NavLink>                
    </div>

let Router = (props) =>
    <HashRouter>
        <div className="container">
            <NavBar/>
                <Switch>
                    <Route exact path="/home" component={Homepage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/imagemarket" component={ImageMarket}/>
                    <Route exact path="/videomarket" component={VideoMarket}/>
                </Switch>
        </div>
    </HashRouter>

export default Router;