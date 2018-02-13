import * as React from 'react';
import { Link } from 'react-router-dom';

import { PathPattern } from '../router/PathPattern';

export namespace RelativeLink {
  export interface Props<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    pattern: PathPattern<T>;
    params: T;
    to?: string;
    replace?: boolean;
  }
}

export class RelativeLink<T> extends React.Component<RelativeLink.Props<T>> {
  render() {
    const { children, params, pattern, to, ...restProps } = this.props;
    return (
      <Link to={to ? to : pattern.compile(params)} {...restProps}>
        {children}
      </Link>
    );
  }
}
