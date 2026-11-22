
import { test, expect } from '@playwright/test';

test('User should be able to login', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('#username').fill('sufiyanakbani18@gmail.com');
  await page.locator('#password').fill('sufiAK@07');
  await page.getByRole('button', {
    name: 'Login'
  }).click();
  await expect(page).toHaveURL(/todos/);
  await expect(
    page.getByText('Todo List App')
  ).toBeVisible();
});
