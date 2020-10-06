import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import EndPage from './components/EndPage/EndPage';
import GamePage from './components/GamePage/GamePage';

function App() {

  const allContent = (
    <>
      <Switch>
        <Route exact path="/start" component={StartPage}/>
        <Route exact path="/end" component={EndPage}/>
        <Route exact path="/game" component={GamePage}/>
        <Redirect to="/start"/>
      </Switch>
    </>
  );

  return (
    <div className="app">
     {allContent}
    </div>
  );
}

export default App;
