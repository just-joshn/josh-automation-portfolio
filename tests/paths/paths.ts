import type { Page } from "@playwright/test";

interface PagePaths {
  signInPage: () => Promise<void>;
  signUpPage: () => Promise<void>;
}

const createPagePaths = (page: Page): PagePaths => ({
  signInPage: async () => {
    await page.goto("/signin");
  },

  signUpPage: async () => {
    await page.goto("/signup");
  },
});

export default createPagePaths;
