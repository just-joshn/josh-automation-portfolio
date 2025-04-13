import { test as base, Page } from "@playwright/test";
import createPagePaths from "../paths/paths";

type SignInPageFixtures = {
  signInPage: Page;
};

export const test = base.extend<SignInPageFixtures>({
  signInPage: async ({ page }, use) => {
    const visit = createPagePaths(page);

    await visit.signInPage();
    await use(page);
  },
});
