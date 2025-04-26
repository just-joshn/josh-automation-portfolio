import type { Locator, Page } from "@playwright/test";

interface SignInForm {
  fillUserNameInput: (username: string) => Promise<void>;
  fillPasswordInput: (password: string) => Promise<void>;
  checkRememberMe: (setChecked: boolean) => Promise<void>;
  clickSignInButton: () => Promise<void>;
  clickSignUpLink: () => Promise<void>;
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
  const getRememberMeCheckbox = page.getByTestId("signin-remember-me").getByRole("checkbox");
  const getSignInButton = page.getByTestId("signin-submit");
  const getSignUpLink = page.getByTestId("signup");

  return {
    fillUserNameInput: async (username: string) => {
      await getUserNameInput.fill(username);
    },

    fillPasswordInput: async (password: string) => {
      await getPasswordInput.fill(password);
    },

    checkRememberMe: async (setChecked: boolean) => {
      await getRememberMeCheckbox.setChecked(setChecked);
    },

    clickSignInButton: async () => {
      await getSignInButton.click();
    },

    clickSignUpLink: async () => {
      await getSignUpLink.click();
    },

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
