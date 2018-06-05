import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import TableUnit from './components/table/TableUnit'
import DetailsCard from './components/details/DetailsCard'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
        
          <Route exact path="/" render={() => <Redirect to="/people" />} />

          <Route exact path="/people" component={TableUnit} />
          <Route exact path="/people/:id" component={DetailsCard} />

        </div>
      </Router>
    );
  }
}

export default App;
