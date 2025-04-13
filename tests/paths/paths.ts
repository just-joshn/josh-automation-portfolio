import type { Page, Response } from "@playwright/test";

interface PagePaths {
  signInPage: () => Promise<null | Response>;
  signUpPage: () => Promise<null | Response>;
}

const createPagePaths = (page: Page): PagePaths => {
  const getSignInPath = "/signin";
  const getSignUpPath = "/signup";

  return {
    signInPage: async () => await page.goto(getSignInPath),
    signUpPage: async () => await page.goto(getSignUpPath),
  };
};

export default createPagePaths;
