import type { Locator, Page } from "@playwright/test";

interface SignInForm {
  fillUserNameInput: (username: string) => void;
  fillPasswordInput: (password: string) => void;
  checkRememberMe: () => void;
  clickSignInButton: () => void;
  clickSignUpLink: () => void;
  getUserNameField: Locator;
  getPasswordField: Locator;
  getUserNameInput: Locator;
  getPasswordInput: Locator;
  getRememberMeCheckbox: Locator;
  getSignInButton: Locator;
  getSignUpLink: Locator;
  getUserNameFieldRequiredError: Locator;
}

const createSignInForm = (page: Page): SignInForm => {
  const getUserNameField = page.getByTestId("signin-username");
  const getPasswordField = page.getByTestId("signin-password");
  const getUserNameFieldRequiredError = getUserNameField.getByText("Username is required");
  const getUserNameInput = getUserNameField.getByRole("textbox");
  const getPasswordInput = getPasswordField.getByRole("textbox");
  const getRememberMeCheckbox = page.getByTestId("signin-remember-me");
  const getSignInButton = page.getByTestId("signin-submit");
  const getSignUpLink = page.getByTestId("signup");

  return {
    fillUserNameInput: (username: string) => getUserNameInput.fill(username),
    fillPasswordInput: (password: string) => getPasswordInput.fill(password),
    checkRememberMe: () => getRememberMeCheckbox.check(),
    clickSignInButton: () => getSignInButton.click(),
    clickSignUpLink: () => getSignUpLink.click(),

    getUserNameField,
    getPasswordField,
    getUserNameInput,
    getPasswordInput,
    getRememberMeCheckbox,
    getSignInButton,
    getSignUpLink,
    getUserNameFieldRequiredError,
  };
};

export default createSignInForm;
