

import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Starting test suite');
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Homepage should load', async ({ page }) => {
  await expect(page).toHaveTitle(/Todo List App/);
});

test('Login button should be visible', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();
});

test.afterEach(async () => {
  console.log('Test completed');
});

test.afterAll(async () => {
  console.log('Test suite completed');
});
