import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
// import './App.scss';

import NavBar from './presentation/NavBar';
import Header from './presentation/Header';
import Footer from './presentation/Footer';
import Form from './container/BootStrap/Form';

const Foo = () => <Form />;
const Bar = () => <Header />;

const linkArray = [
  { label: 'Foo', route: '/foo' },
  { label: 'Bar', route: '/bar' },
];

function App() {
  return (
    <Fragment>
      <BrowserRouter basename="/" >
        <Fragment>
          <NavBar linkArray={linkArray} />
          <Switch>
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
          <Switch>
            <Route path="/" component={Footer} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
