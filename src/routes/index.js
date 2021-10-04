import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import components from "../components";
import containers from "../containers";
function Routes(){
    return (
        <BrowserRouter>
        <components.header />
         <Switch>
             
             <Route name="Experience" path="/experience" component={containers.Experience}/>
             <Route name="Education" path="/education" component={containers.Education}/>
             <Route name="Skills" path="/skills" component={containers.Skills}/>
             <Route name="Interests" path="/interests" component={containers.Interests}/>
             <Route name="Awards" path="/awards" component={containers.Awards}/>
             <Route name="About" path="/" component={containers.About}/>
         </Switch>
         <components.footer />
        </BrowserRouter>
    )
}
export default Routes