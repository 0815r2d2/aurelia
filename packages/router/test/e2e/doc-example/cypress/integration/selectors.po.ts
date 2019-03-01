export const Shared = {
  appMenuNavItems: '[data-test=app-menu] li',
  appMenuNavItemsActive: '[data-test=app-menu] li.nav-active',
  listsViewport: 'au-viewport[name=lists]',
  listsViewportHeader: 'au-viewport[name=lists] .viewport-header',
  contentViewport: 'au-viewport[name=content]',
  contentViewportHeader: 'au-viewport[name=content] .viewport-header',
  chatViewport: 'au-viewport[name=chat]',
  chatViewportHeader: 'au-viewport[name=chat] .viewport-header',
  noDelayCheckbox: '[data-test=no-delay-checkbox]',
  allowEnterAuthorDetailsCheckbox: '[data-test=allow-enter-author-details-checkbox]',
  infoBackgroundColor: '[data-test=info-background-color]'
};

export const AuthorsComponent = {
  authorLinks: '[data-test=authors-element-author-link]',
  bookTitles: '[data-test=authors-element-book-name]'
};

export const AuthorComponent = {
  bookLinks: '[data-test=author-element-book-link]',
  hideTabsCheckbox: '[data-test=author-element-hide-tabs-checkbox]',
  authorMenuNavItems: '[data-test=author-menu] li',
  authorMenuNavItemsActive: '[data-test=author-menu] li.nav-active',
  authorTabsViewport: 'au-viewport[name=author-tabs]',
  authorTabsViewportHeader: 'au-viewport[name=author-tabs] .viewport-header'
};

export const AboutComponent = {
  aboutInput: '[data-test=about-inputbox]'
};
