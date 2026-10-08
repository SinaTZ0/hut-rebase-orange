import { expect, test } from "@playwright/test";

test("the homepage presents the university", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("دانشگاه صنعتی همدان | دانش، فناوری، آینده");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("دانشگاه صنعتی همدان");
});
