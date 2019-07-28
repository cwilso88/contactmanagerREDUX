import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Goals from './components/pages/Goals';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App" style={{ backgroundImage: "url(https://i.pinimg.com/originals/f4/54/f7/f454f75292f93e2b6c66846a857edf44.jpg)", paddingBottom: "20px" }}>
          <Header branding="Tech Consulting Team" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/goals" component={Goals} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
