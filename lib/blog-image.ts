export function blogImageObjectPositionClass(imagePosition?: string): string {
  switch (imagePosition) {
    case 'top':
      return 'object-top';
    case 'bottom':
      return 'object-bottom';
    default:
      return 'object-center';
  }
}
