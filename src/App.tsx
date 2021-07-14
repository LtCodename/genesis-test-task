import React, { createContext, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import EndPage from "./components/EndPage/EndPage";
import GamePage from "./components/GamePage/GamePage";

interface IValue {
  [key: string]: any;
}

export const Context = createContext<IValue>({});

function App() {
  const [rewardValue, setRewardWalue] = useState(0);

  const reloadRewardValue = (newValue: number) => {
    setRewardWalue(newValue);
  };

  const allContent = (
    <Context.Provider
      value={{
        rewardValue,
        reloadRewardValue,
      }}
    >
      <Switch>
        <Route exact path="/start" component={StartPage} />
        <Route exact path="/end" component={EndPage} />
        <Route exact path="/game" component={GamePage} />
        <Redirect to="/start" />
      </Switch>
    </Context.Provider>
  );

  return <div className="app">{allContent}</div>;
}

export default App;
