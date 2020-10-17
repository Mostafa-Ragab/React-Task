import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation-bar/Navigation_Bar'
// import UnderReview from './components/Under_Review'
// import IntialAcceptance from './components/Intial_Acceptance'
// import ConditionalAcceptance from './components/Conditional_Acceptance'
// import Rejected from './components/Rejected'
import Header from './components/Header';
import {All, Rejected,IntialAcceptance, UnderReview,ConditionalAcceptance} from './components/All'
function App() {
  return (
    <Router>
    <div style={{ backgroundColor: "#f8f8ff" }}>
      <Header/>
      <div className="container home" >
            <div className="row">
                <div className="col ">
                <NavigationBar/>
                    <Switch>
                        <Route path="/UnderReview" component={UnderReview} />
                        <Route path="/IntialAcceptance" component={IntialAcceptance}/>
                        <Route path="/ConditionalAcceptance" component={ConditionalAcceptance} />
                        <Route path="/Rejected" component={Rejected} />
                        <Route exact path="/" component={All}/>
                    </Switch>
                </div>
            </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
