import { test, expect } from "@playwright/test";

test("lowercaseOnly", async ({ page }) => {
  await page.goto("https://www.cafestore.com.br");
  const widget = await page
    .waitForSelector("/html/body/getsitecontrol-widget//div/div/div/button", {
      timeout: 20000,
    })
    .catch(() => null);
  if (widget) {
    await page.keyboard.press("Escape");
  }

  const search_bar = page.getByPlaceholder("Procuro por");
  await search_bar.fill("mocha");
  await page.keyboard.press("Enter");

  await expect(
    page.getByText("Sachê Solúvel Starbucks Mocha Premium 4 unidades")
  ).toBeVisible();

  // Expect a title "to contain" a substring.
});

test("multiCase", async ({ page }) => {
  await page.goto("https://www.cafestore.com.br");
  const widget = await page
    .waitForSelector("/html/body/getsitecontrol-widget//div/div/div/button", {
      timeout: 20000,
    })
    .catch(() => null);
  if (widget) {
    await page.keyboard.press("Escape");
  }

  const search_bar = page.getByPlaceholder("Procuro por");
  await search_bar.fill("mOchA");
  await page.keyboard.press("Enter");

  await expect(
    page.getByText("Sachê Solúvel Starbucks Mocha Premium 4 unidades")
  ).toBeVisible();
  // Expect a title "to contain" a substring.
});

test("wrongTyping", async ({ page }) => {
  await page.goto("https://www.cafestore.com.br");
  const widget = await page
    .waitForSelector("/html/body/getsitecontrol-widget//div/div/div/button", {
      timeout: 20000,
    })
    .catch(() => null);
  if (widget) {
    await page.keyboard.press("Escape");
  }

  const search_bar = page.getByPlaceholder("Procuro por");
  await search_bar.fill("moch");
  await page.keyboard.press("Enter");

  await expect(
    page.getByText("Sachê Solúvel Starbucks Mocha Premium 4 unidades")
  ).toBeVisible();
  // Expect a title "to contain" a substring.
});

test("emptySearchBar", async ({ page }) => {
  await page.goto("https://www.cafestore.com.br");
  const widget = await page
    .waitForSelector("/html/body/getsitecontrol-widget//div/div/div/button", {
      timeout: 20000,
    })
    .catch(() => null);
  if (widget) {
    await page.keyboard.press("Escape");
  }

  const search_bar = page.getByPlaceholder("Procuro por");
  await search_bar.click();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(
    new RegExp("https://www.cafestore.com.br/Sistema\\?buscavazia=.*")
  );
});

test("monoCharacther", async ({ page }) => {
  await page.goto("https://www.cafestore.com.br");
  const widget = await page
    .waitForSelector("/html/body/getsitecontrol-widget//div/div/div/button", {
      timeout: 20000,
    })
    .catch(() => null);
  if (widget) {
    await page.keyboard.press("Escape");
  }

  const search_bar = page.getByPlaceholder("Procuro por");
  await search_bar.fill("a");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(
    "https://www.cafestore.com.br/Sistema/buscavazia?ft=a"
  );
});
