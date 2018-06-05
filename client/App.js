import React, { Fragment } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import NavBar from './presentation/NavBar';
import Header from './presentation/Header';
import Footer from './presentation/Footer';
import Form from './container/BootStrap/Form';

const linkArray = [
  { label: 'Rooms', path: '/rooms', component: Form },
  { label: 'Weddings', path: '/weddings', component: Form },
  { label: 'Conference', path: '/conference', component: Form },
  { label: 'Food', path: '/food', component: Form },
  { label: 'Todo', path: '/to-do', component: Form },
  { label: 'Contact', path: '/contact', component: Form },
];

function App() {
  return (
    <Fragment>
      <NavBar linkArray={linkArray} logo="/img/amhLogo.png" />
      <Switch>
        <Route exact path="/" component={Header} />
        {
          linkArray.map(d => <Route key={d.path} exact {...d} />)
        }
      </Switch>
      <Switch>
        <Route path="/" component={Footer} />
      </Switch>
    </Fragment>
  );
}

export default App;
