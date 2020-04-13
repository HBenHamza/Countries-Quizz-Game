import React , { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import Main from './components/Main';
import Thanks from './components/Thanks';
import continents from './containers/continents';
import quizz from './containers/quizz';


import './App.css';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/choose" component={continents} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/quizz" component={quizz} />
      </Switch>
    );
  }
}

export default App;
