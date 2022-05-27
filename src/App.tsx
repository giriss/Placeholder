import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ReactPlaceholderInfo from './ReactPlaceholderInfo';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import ReactContentLoaderInfo from './ReactContentLoaderInfo';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Link to="/react-placeholder">react-placeholder</Link>
            <br />
            <Link to="/react-content-loader">react-content-loader</Link>
          </Route>
          <Route exact path="/react-placeholder">
            <ReactPlaceholderInfo />
          </Route>
          <Route exact path="/react-content-loader">
            <ReactContentLoaderInfo />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
