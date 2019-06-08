import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DynamicImport from './DynamicImport';

import AppBar from './Components/AppToolbar/AppToolbar';
import Gallery from './Components/Gallery/Gallery';
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

const Country = (props) => (
  <DynamicImport load={() => import('./Components/Country/Country')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

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
            <Route path="/gallery" component={Gallery} />
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
