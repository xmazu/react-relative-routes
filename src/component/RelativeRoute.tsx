import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { PathPattern } from '../router/PathPattern';

export interface RelativeRouteProps extends RouteProps {
  pattern: PathPattern;
}

export const RelativeRoute: React.SFC<RelativeRouteProps> = ({
  pattern,
  ...restProps
}) => <Route path={pattern.getPattern()} {...restProps} />;
