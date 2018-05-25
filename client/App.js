import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';

import NavBar from './presentation/NavBar';
import Footer from './presentation/Footer';

const Foo = () => <h1>Foo</h1>;
const Bar = () => <h1>Bar</h1>;


const linkArray = [
  { label: 'Foo', route: '/foo' },
  { label: 'Bar', route: '/bar' },
];

const App = () => (
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
    <button className="btn btn-outline-indian m-1 ">Button</button>
  </Fragment>
);

export default App;
