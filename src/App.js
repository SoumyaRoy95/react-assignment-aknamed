import React from 'react'
import './App.css';
import Home from './pages/home';
import Articles from './pages/articles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AllArticles from './pages/allArticles';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/details/:id" render={(props) => <Articles {...props} />}/>
        <Route path="/allDetails" component={AllArticles} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
