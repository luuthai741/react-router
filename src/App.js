import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routers/routes'
import Nav from './components/Nav';

// const CustomeLink = ({ label, to, activeOnlyWhenExact }) => {
//   <Route to={to} exact={activeOnlyWhenExact} children={({ match }) => {
//     let active = match ? "nav-link selected" : "nav-link";
//     return (
//       <NavLink className={active} to={to} exact>{label}</NavLink>
//     )
//   }} />
// }

class App extends Component {
  handRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} /> */}
          {this.handRoutes(routes)}
        </Switch>
      </Router>
    );
  }
}

export default App;