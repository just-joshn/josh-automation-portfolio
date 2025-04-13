import type { Locator, Page } from "@playwright/test";

interface SignUpForm {
  fillFirstNameInput: (firstName: string) => void;
  fillLastNameInput: (lastName: string) => void;
  fillUserNameInput: (username: string) => void;
  fillPasswordInput: (password: string) => void;
  fillConfirmPasswordInput: (password: string) => void;
  clickSignUpButton: () => void;
  clickSignInLink: () => void;
  getFirstNameField: Locator;
  getLastNameField: Locator;
  getUserNameField: Locator;
  getPasswordField: Locator;
  getFirstNameInput: Locator;
  getLastNameInput: Locator;
  getSignUpButton: Locator;
  getSignInLink: Locator;
  getConfirmPasswordField: Locator;
  getFirstNameFieldRequiredError: Locator;
  getLastNameFieldRequiredError: Locator;
  getUserNameFieldRequiredError: Locator;
  getPasswordFieldEnterError: Locator;
  getPasswordFieldMinError: Locator;
  getConfirmPasswordFieldConfirmError: Locator;
  getConfirmPasswordFieldNotMatchError: Locator;
}

const createSignUpForm = (page: Page): SignUpForm => {
  const getFirstNameField = page.getByTestId("signup-first-name");
  const getLastNameField = page.getByTestId("signup-last-name");
  const getUserNameField = page.getByTestId("signup-username");
  const getPasswordField = page.getByTestId("signup-password");
  const getConfirmPasswordField = page.getByTestId("signup-confirmPassword");
  const getFirstNameFieldRequiredError = getFirstNameField.getByText("First Name is required");
  const getLastNameFieldRequiredError = getLastNameField.getByText("Last Name is required");
  const getUserNameFieldRequiredError = getUserNameField.getByText("Username is required");
  const getPasswordFieldEnterError = getPasswordField.getByText("Enter your password");

  const getPasswordFieldMinError = getPasswordField.getByText(
    "Password must contain at least 4 characters"
  );

  const getConfirmPasswordFieldConfirmError =
    getConfirmPasswordField.getByText("Confirm your password");

  const getConfirmPasswordFieldNotMatchError =
    getConfirmPasswordField.getByText("Password does not match");

  const getFirstNameInput = getFirstNameField.getByRole("textbox");
  const getLastNameInput = getLastNameField.getByRole("textbox");
  const getSignUpButton = page.getByTestId("signup-submit");
  const getSignInLink = page.getByRole("link", { name: "Have an account? Sign In" });

  return {
    fillFirstNameInput: async (firstName: string) => await getFirstNameInput.fill(firstName),
    fillLastNameInput: async (lastName: string) => await getLastNameInput.fill(lastName),
    fillUserNameInput: async (username: string) => await getUserNameField.fill(username),
    fillPasswordInput: async (password: string) => await getPasswordField.fill(password),
    fillConfirmPasswordInput: async (password: string) =>
      await getConfirmPasswordField.fill(password),
    clickSignUpButton: async () => await getSignUpButton.click(),
    clickSignInLink: async () => await getSignInLink.click(),

    getFirstNameField,
    getLastNameField,
    getUserNameField,
    getPasswordField,
    getConfirmPasswordField,
    getFirstNameFieldRequiredError,
    getLastNameFieldRequiredError,
    getUserNameFieldRequiredError,
    getPasswordFieldEnterError,
    getPasswordFieldMinError,
    getConfirmPasswordFieldConfirmError,
    getConfirmPasswordFieldNotMatchError,
    getFirstNameInput,
    getLastNameInput,
    getSignUpButton,
    getSignInLink,
  };
};

export default createSignUpForm;
