import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage.js';
import About from './About.js'
import ImageMarket from './ImageMarket.js';
import VideoMarket from './VideoMarket.js';

let NavBar = () =>
    <div>
        <a href="#home">home{"\n"}</a>
        <a href="#about">about{"\n"}</a>
        <a href="#videomarket">videomarket{"\n"}</a>
        <a href="#imagemarket">imagemarket{"\n"}</a>
    </div>

let Router = (props) =>
    <HashRouter>
        <div>
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