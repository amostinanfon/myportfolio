import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Aboutme from './aboutme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/myportfolio" component={LandingPage}/>
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects}/>
        <Route  path="/resume" component={Resume}/>
        <Route  path="/aboutme" component={Aboutme}/>
     </Switch>
)

export default Main;
     
 