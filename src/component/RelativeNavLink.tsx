import * as React from 'react';
import { NavLink, match } from 'react-router-dom';
import * as H from 'history';

import { PathPattern } from '../router/PathPattern';
import { RelativeLink } from './RelativeLink';

export namespace RelativeNavLink {
  export interface Props<T>
    extends RelativeLink.Props<T> {
    location?: H.Location;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
  }
}

export class RelativeNavLink<T> extends React.Component<RelativeNavLink.Props<T>> {
  render() {
    const { children, params, pattern, to, ...restProps } = this.props;
    return (
      <NavLink to={to ? to : pattern.compile(params)} {...restProps}>
        {children}
      </NavLink>
    );
  }
}
