import "./App.css";
import EnterBox from "./view/components/EnterBox/EnterBox";
import QuizBox from "./view/components/QuizBox/QuizBox";
import Page404 from "./view/components/Page404/Page404";
import GetQuiz from "./view/components/GetQuiz/GetQuiz";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/quiz">
            <QuizBox />
          </Route>
          <Route path="/getQuiz">
            <GetQuiz/>
          </Route>
          <Route path="/getQuiz/:id">
            <GetQuiz/>
          </Route>
          <Route exact path="/">
            <EnterBox />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}