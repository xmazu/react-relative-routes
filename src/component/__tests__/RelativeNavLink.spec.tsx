import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { RelativeNavLink } from '../RelativeNavLink';
import { PathPattern } from '../../router/PathPattern';

describe('<RelativeNavLink />', function() {
  it('should convert pattern to href', function() {
    const PATTERN = PathPattern.from('/user');

    const dom = mount(
      <MemoryRouter>
        <RelativeNavLink pattern={PATTERN}>User</RelativeNavLink>
      </MemoryRouter>
    );

    expect(dom.find('a').prop('href')).toEqual('/user');
  });

  it('should convert pattern with params', function() {
    const PATTERN = PathPattern.from<{ id: number }>('/user/:id');

    const dom = mount(
      <MemoryRouter>
        <RelativeNavLink pattern={PATTERN} params={{ id: 5 }}>
          User 5
        </RelativeNavLink>
      </MemoryRouter>
    );

    expect(dom.find('a').prop('href')).toEqual('/user/5');
  });
});
