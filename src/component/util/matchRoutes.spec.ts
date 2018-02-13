import { RouteProps } from 'react-router-dom';

import { matchRoutes } from './matchRoutes';

describe('matchRoutes', function() {
  it('should match route', function() {
    const pathname = '/user';
    const routes: Array<RouteProps> = [
      {
        path: '/',
        render: () => 'main',
        exact: true
      },
      {
        path: '/user',
        render: () => 'user',
        exact: true
      }
    ];

    expect(matchRoutes(routes, pathname)).toEqual({
      match: {
        path: '/user',
        url: '/user',
        isExact: true,
        params: {}
      },
      route: routes[1]
    });
  });

  it('should not match route', function() {
    const pathname = '/about';
    const routes: Array<RouteProps> = [
      {
        path: '/',
        exact: true
      }
    ];

    expect(matchRoutes(routes, pathname)).toBeNull();
  });
});
