import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from '../navbar/navbar.component'
import Showcase from '../showcase/showcase.component';
import Lectures from '../lectures/lectures.component';
import LecturesCollection from '../lectures-collection/lectures-collection.component';
import SignUp from '../sign-up/sign-up.component';
import {CardsContext} from '../../context/Context'

const Homepage = () => {
    const {toggleForm} = useContext(CardsContext)
    return (  
        <BrowserRouter>
        <div className="App">
          <Navbar />
          {toggleForm ? <SignUp /> : ''}
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
 
export default Homepage;