import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/DashBoard/screens/home/home.screen"
import Record from "./screens/DashBoard/screens/record/record.screen";
import {Header} from "./components/Header/header.component"
import Subscriber from "./screens/DashBoard/screens/subscriber/subscriber.screen";
import Courses from "./screens/DashBoard/screens/courses/courses.screen";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header/>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
       
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
             
              </Route>
           
            </>
          ))}

           <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/record"}>
              <Record />
            </Route>
             <Route path={"/courses"}>
              <Courses />
            </Route>
            <Route path={"/subscrber"}>
              <Subscriber />
            </Route>
       
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
