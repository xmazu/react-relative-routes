import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { RelativeLink } from '../RelativeLink';
import { PathPattern } from '../../router/PathPattern';

describe('<RelativeLink />', function() {
  it('should convert pattern to href', function() {
    const PATTERN = PathPattern.from('/user');

    const dom = mount(
      <MemoryRouter>
        <RelativeLink pattern={PATTERN}>User</RelativeLink>
      </MemoryRouter>
    );

    expect(dom.find('a').prop('href')).toEqual('/user');
  });

  it('should convert pattern with params', function() {
    const PATTERN = PathPattern.from<{ id: number }>('/user/:id');

    const dom = mount(
      <MemoryRouter>
        <RelativeLink pattern={PATTERN} params={{ id: 5 }}>
          User 5
        </RelativeLink>
      </MemoryRouter>
    );

    expect(dom.find('a').prop('href')).toEqual('/user/5');
  });
});
