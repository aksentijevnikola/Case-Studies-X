import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/navbar.component'
import Showcase from './components/showcase/showcase.component';
import Lectures from './components/lectures/lectures.component';
import LecturesCollection from './components/lectures-collection/lectures-collection.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="page-wrapper">
          <Showcase />
          <Switch>
            <Route path='/' exact component={Lectures} />
            <Route path='/lectures/:collectionId' component={LecturesCollection} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
