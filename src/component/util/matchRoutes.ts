import { matchPath, RouteProps, match } from 'react-router-dom';

export function matchRoutes(routes: Array<RouteProps>, pathname: string) {
  for (const route in routes) {
    if (routes[route]) {
      const matchedPath = matchPath(pathname, routes[route]);

      if (matchedPath) {
        return { match: matchedPath, route: routes[route] };
      }
    }
  }

  return null;
}
