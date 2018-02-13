import { normalizePattern } from '../normalizePattern';

describe('normalizePattern', function() {
  it('should add slash at the begin', function() {
    expect(normalizePattern('app')).toEqual('/app');
  });

  it('should strip multiple slashes', function() {
    expect(normalizePattern('///app')).toEqual('/app');
  });
});
