
import { test, expect } from '@playwright/test';

test('User should be able to login', async ({ page }) => {
  await page.goto('/');
  await page.locator('#username').fill(process.env.EMAILID);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.getByRole('button', {
    name: 'Login'
  }).click();
  await expect(
    page.getByText('Todo List App')
  ).toBeVisible();
});
