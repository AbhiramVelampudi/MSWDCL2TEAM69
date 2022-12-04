import React from "react"
//import "./homepage.css"
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './EditUser';
import Editser from './Editser' ;
import Video from './video';
import video2 from './video2';
import AllUsers from './AllUsers';
import AddTeams from './AddTeams';
import Allsers from "./Allsers";
import AddsTeams from "./AddsTeams";
import Feedback from "./Feedback1";
import Quote from "./Quote";
import ViewResult1 from './ViewResult1'


const homepage = ({setLoginUser}) => {
    return (
        <Router>
        <div className="homepage">
            <Navbar/>
             <Switch>
         <Route path="/" exact component={Video}/>
         <Route path="/ha" exact component={video2}/>
          <Route path="/all" exact component={AllUsers}/> 
          <Route path="/alls" exact component={Allsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path="/adds" exact component={AddsTeams}/>
          <Route path="/fb" exact component={Feedback}/>
          <Route path="/a" exact component={Quote}/>
          <Route path="/ViewResult1" exact component={ViewResult1}/>

          <Route path="/edit/:id" exact component={EditUser}/>
          <Route path="/edits/:sid" exact component={Editser}/>
       </Switch>  
            </div>
            </Router>
            
        
    )
}

export default homepage