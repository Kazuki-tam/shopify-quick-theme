import 'dotenv/config'
import { test, expect } from '@playwright/test';

// You need to create an env file.
const SHOP_URL = process.env.SHOP_URL;
const SHOP_PASS = process.env.SHOP_PASS

test('Access test', async ({ page }) => {
  if (!SHOP_URL || !SHOP_PASS) return
  await page.goto(SHOP_URL);
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill(SHOP_PASS);
  // Press enter
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(SHOP_URL);
});
