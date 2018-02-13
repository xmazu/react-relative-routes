import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Route, RouterChildContext } from 'react-router-dom';

import { RelativeRouteProps } from './RelativeRoute';
import { matchRoutes } from './util/matchRoutes';

export const RelativeSwitch: React.SFC = ({ children }, context) => {
  const { router: { route: parent } }: RouterChildContext<{}> = context;
  const currentLocation = location || parent.location;

  const routes = React.Children.map(
    children,
    (child: React.ReactElement<RelativeRouteProps>) => {
      if (child.props.pattern !== undefined) {
        return {
          ...child.props,
          path: child.props.pattern.getPattern()
        };
      }

      return child.props;
    }
  );

  const matchedRoute = matchRoutes(routes, currentLocation.pathname);

  if (matchedRoute !== null) {
    const { route } = matchedRoute;

    return <Route {...route} />;
  }

  return null;
};

RelativeSwitch.contextTypes = {
  router: PropTypes.shape({
    route: PropTypes.shape({
      location: PropTypes.object.isRequired
    }).isRequired
  }).isRequired
};
