import * as React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { PathPattern } from '../router/PathPattern';

export namespace RelativeLink {
  export interface Props<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    pattern: PathPattern<T>;
    params?: T;
    replace?: boolean;
  }
}

export class RelativeLink<T> extends React.Component<RelativeLink.Props<T>> {
  static propTypes = {
    pattern: PropTypes.instanceOf(PathPattern).isRequired
  };

  render() {
    const { children, params, pattern, ...restProps } = this.props;
    return (
      <Link to={pattern.compile(params)} {...restProps}>
        {children}
      </Link>
    );
  }
}
