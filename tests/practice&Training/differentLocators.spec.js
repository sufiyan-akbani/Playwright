// getByRole() - Find elements by role and accessible name	Button, textbox, link
// getByText() - Find elements by visible text	Heading, paragraph
// getByLabel() - Find form fields by associated label	Username, password
// getByPlaceholder() - Find inputs by placeholder text	Search, email
// getByAltText() - Find images by alt attribute	Logo, profile image
// getByTitle() - Find elements by title attribute	Tooltip elements
// getByTestId() - Find elements by test ID	Custom test selectors
// locator() - Find elements using CSS or XPath	ID, class, attributes

import { test, expect } from "@playwright/test";

test("Login page - Locator demonstration", async ({ page }) => {
  await page.goto("/");

  // 1. getByRole()
  await expect(
    page.getByRole("heading", { name: "Todo List App" }),
  ).toBeVisible();

  // 2. getByText()
  await expect(page.getByText("Don't have an account?")).toBeVisible();

  // 3. getByLabel()
  await page.getByLabel("Email Id").fill(process.env.EMAILID);

  await page.getByLabel("Password").fill(process.env.PASSWORD);

  // 4. getByPlaceholder()
  await expect(
    page.getByPlaceholder("Enter a registered email address"),
  ).toBeVisible();

  // 5. getByAltText()
  await expect(page.getByAltText("ToDo list App Logo")).toBeVisible();

  // 6. getByTitle()
  await expect(page.getByTitle(/Todo List App/)).toBeVisible();

  // 7. getByTestId()
  await expect(page.getByTestId("register-button")).toBeVisible();

  // 8. locator() - CSS selector
  await expect(page.locator("#username")).toBeVisible();

  // locator() - XPath
  await expect(page.locator('//button[text()="Login"]')).toBeVisible();

  // Login
  await page.getByRole("button", { name: "Login" }).click();

  // Verify successful login
  await expect(page).toHaveURL(/todos/);

  await expect(page.getByText("Todo List App")).toBeVisible();
});
