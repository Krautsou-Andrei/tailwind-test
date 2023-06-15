import Popup from "./popup.js";

const SELECTORS = {
  BODY: "body",
  BUTTON_OTHER: "[data-button-other]",
  OTHER_MENU: "[data-other-menu]",
};

const SELECTORS_USER = {
  BODY: "body",
  BUTTON_USER_MENU: "[data-user-menu-button]",
  USER_MENU: "[data-user-menu]",
};

const SELECTORS_BURGER = {
  BODY: "body",
  BUTTON_OPEN_BURGER: "[data-button-open-burger]",
  BURGER: "[data-burger]",
  BURGER_MENU: "[data-burger-menu]",
  BUTTON_CLOSE_BURGER: "[data-button-close-burger]",
};

const otherMenu = new Popup(
  SELECTORS.OTHER_MENU,
  SELECTORS.BUTTON_OTHER,
  SELECTORS.BODY
);

const userMenu = new Popup(
  SELECTORS_USER.USER_MENU,
  SELECTORS_USER.BUTTON_USER_MENU,
  SELECTORS_USER.BODY
);

const burgerMenu = new Popup(
  SELECTORS_BURGER.BURGER,
  SELECTORS_BURGER.BUTTON_OPEN_BURGER,
  SELECTORS_BURGER.BODY,
  SELECTORS_BURGER.BUTTON_CLOSE_BURGER,
  SELECTORS_BURGER.BURGER_MENU
);
