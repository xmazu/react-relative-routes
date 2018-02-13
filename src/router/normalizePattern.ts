export function normalizePattern(path: string): string {
  if (path[0] === '/') {
    return normalizePattern(path.substr(1));
  }

  return '/' + path;
}
