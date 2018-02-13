import { PathFunction, compile } from 'path-to-regexp';

import { normalizePattern } from './normalizePattern';

export class PathPattern<Params = {}> {
  static from<P>(pattern: string): PathPattern<P> {
    return new PathPattern(pattern);
  }

  private normalizedPattern: string;

  private memoized: PathFunction;

  constructor(pattern: string) {
    this.normalizedPattern = normalizePattern(pattern);
  }

  compile(params?: Params): string {
    if (!this.memoized) {
      this.memoized = compile(this.normalizedPattern);
    }

    return this.memoized(params);
  }

  getPattern(): string {
    return this.normalizedPattern;
  }

  extend<NewParams = {}>(pattern: string): PathPattern<NewParams & Params> {
    return new PathPattern(this.getPattern() + normalizePattern(pattern));
  }
}
