import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from './Components/AppToolbar/AppToolbar';
import Country from './Components/Country/Country';
import Language from './Components/Language/Language';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar />
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/country" component={Country} />
            <Route path="/language" component={Language} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h3>Home Page</h3>
  </div>
);

export default App;
