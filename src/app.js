import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/create';
import Application from './App';
import ApiHandler from './helpers/ApiHandler';

const store = configureStore({}, new ApiHandler());

const App = () => (
  <Provider store={store} >
    <Router>
      <Application>
        <Switch>
          {routes}
        </Switch>
      </Application>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("main-area"));
