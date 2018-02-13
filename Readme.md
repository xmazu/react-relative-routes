# react-relative-routes
[![npm version](https://badge.fury.io/js/react-relative-routes.svg)](https://badge.fury.io/js/react-relative-routes)
[![Build Status](https://travis-ci.org/xmazu/react-relative-routes.svg?branch=master)](https://travis-ci.org/xmazu/react-relative-routes)

> A wrapper around [react-router](https://github.com/ReactTraining/react-router) components to allow easy way of routes configuration.

## Features

- Unopinionated routes configuration with well know path strings
- Wrappers around the react-router components to support patterns
- Well tested library

## Installation

```shell
yarn add react-relative-routes
```

or

```shell
npm install react-relative-routes --save
```


## Basic usage

### Configure routes
```jsx
import { PathPattern } from 'react-relative-routes';

const BASE_PATTERN = PathPattern.from('/');
const ABOUT_PATTERN = BASE_PATTERN.extend('/about');
const USER_PROFILE_PATTERN = BASE_PATTERN.extend('/user/:id');

```
### Declare routes switch

```jsx
import { RelativeSwitch } from 'react-relative-routes';

const Dashboard = () => (
  <RelativeSwitch>
    <RelativeRoute pattern={BASE_PATTERN} component={Home} exact />
    <RelativeRoute pattern={ABOUT_PATTERN} component={About} exact />
    <RelativeRoute pattern={USER_PROFILE_PATTERN} component={User} exact />
  </RelativeSwitch>
);
```

### Use RelativeLink and RelativeNavLink

```jsx
import { RelativeLink, RelativeNavLink } from 'react-relative-routes';

const Links = () => (
  <div>
    <RelativeNavLink activeClassName="active" pattern={ABOUT_PATTERN}>
      About
    </RelativeNavLink>

    <RelativeLink pattern={USER_PROFILE_PATTERN} params={{ id: 5 }}>
      Go to user
    </RelativeLink>
  </div>
);
```

## FAQ

### Why custom `<RelativeSwitch />` instead of react-router's Switch?

`<Switch />` does not work with custom `<Route />` components. Since we need to use
custom props for passing the **pattern** there is a need to use `<RelativeLink />` or `<RelativeNavLink />`.


## Typings
If you are using [TypeScript](https://www.typescriptlang.org/), you don't have to install typings - they are provided in npm package.



## License
MIT