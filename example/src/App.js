import React, { Component } from 'react';
import {
  RelativeLink,
  RelativeSwitch,
  RelativeRoute,
  RelativeNavLink,
  PathPattern
} from 'react-relative-routes';

const BASE_PATTERN = PathPattern.from('/');
const ABOUT_PATTERN = BASE_PATTERN.extend('/about');
const USER_PROFILE_PATTERN = BASE_PATTERN.extend('/user/:id');

const Home = () => <span>Home Page</span>;
const About = () => <span>About us</span>;
const User = ({ match: { params: { id } } }) => <span>user: {id}</span>;

const App = () => (
  <div className="App">
    <nav className="nav">
      <RelativeNavLink activeClassName="active" pattern={BASE_PATTERN} exact>
        Home
      </RelativeNavLink>
      <RelativeNavLink activeClassName="active" pattern={ABOUT_PATTERN}>
        About
      </RelativeNavLink>
    </nav>

    <div className="content">
      <RelativeSwitch>
        <RelativeRoute pattern={BASE_PATTERN} component={Home} exact />
        <RelativeRoute pattern={ABOUT_PATTERN} component={About} exact />
        <RelativeRoute pattern={USER_PROFILE_PATTERN} component={User} exact />
      </RelativeSwitch>
    </div>

    <hr />
    <RelativeLink pattern={USER_PROFILE_PATTERN} params={{ id: 5 }}>
      Go to user
    </RelativeLink>
  </div>
);

export default App;
