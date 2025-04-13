import type { Page, Request } from "@playwright/test";

interface MockOptions {
  url: string | RegExp;
  method?: string;
  status?: number;
  body?: string | object;
  headers?: Record<string, string>;
  match?: (request: Request) => boolean;
}

export function createApiMock(options: MockOptions) {
  return async (page: Page) => {
    await page.route(options.url, async (route) => {
      const request = route.request();

      if (options.method && request.method() !== options.method) {
        await route.continue();

        return;
      }

      if (options.match && !options.match(request)) {
        await route.continue();

        return;
      }
      let body: string | undefined;
      const contentType = options.headers?.["content-type"] || "application/json";

      if (typeof options.body === "string") {
        body = options.body;
      } else if (options.body) {
        body = JSON.stringify(options.body);
      }

      await route.fulfill({
        body,
        contentType,
        headers: options.headers || {},
        status: options.status || 200,
      });
    });
  };
}
