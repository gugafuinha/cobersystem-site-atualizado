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

export function blogImageFitClass(imageContain?: boolean, imagePosition?: string): string {
  if (imageContain) {
    return 'object-contain object-center';
  }

  return `object-cover ${blogImageObjectPositionClass(imagePosition)}`;
}
