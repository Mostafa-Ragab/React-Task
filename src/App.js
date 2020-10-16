import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navigation_Bar'
import UnderReview from './components/Under_Review'
import IntialAcceptance from './components/Intial_Acceptance'
import ConditionalAcceptance from './components/Conditional_Acceptance'
import Rejected from './components/Rejected'
import Header from './components/Header';
import All from './components/All'
function App() {
  return (
    <BrowserRouter>
    <div className='App' style={{ backgroundColor: "#f8f8ff" }}>
      <Header/>
      <div className="container">
            <div className="row">
                <div className="col ">
                <NavigationBar/>
                    <Switch>
                        <Route path="/UnderReview" component={UnderReview} />
                        <Route path="/IntialAcceptance" component={IntialAcceptance}/>
                        <Route path="/ConditionalAcceptance" component={ConditionalAcceptance} />
                        <Route path="/Rejected" component={Rejected} />
                        <Route exact path="/" component={All} />
                    </Switch>
                </div>
            </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
