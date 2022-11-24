import {Switch, Route} from "react-router-dom";
import Home from "../Pages/Home"
import Project from "../Pages/Project";
function Routers(){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/projects">
                <Project/>
            </Route>
        </Switch>
    )
}

export default Routers