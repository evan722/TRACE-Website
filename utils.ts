export function createPageUrl(page: string): string {
  return page === 'Home' ? '/' : `/${page}`;
}
