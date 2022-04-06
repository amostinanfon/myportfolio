import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Aboutme from './aboutme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="https://amostinanfon.github.io/myportfolio/" component={LandingPage}/>
        <Route  path="/Contact" component={Contact}/>
        <Route  path="/Projects" component={Projects}/>
        <Route  path="/Resume" component={Resume}/>
        <Route  path="/Aboutme" component={Aboutme}/>
     </Switch>
)

export default Main;
     
 