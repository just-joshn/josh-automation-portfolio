import { test as base, Page, expect } from "@playwright/test";
import createPagePaths from "../paths/paths";

interface SignUpPageFixtures {
  signUpPage: Page;
}

export const test = base.extend<SignUpPageFixtures>({
  signUpPage: async ({ page }, use) => {
    const visit = createPagePaths(page);

    await visit.signUpPage();
    await use(page);
  },
});

export { expect };
