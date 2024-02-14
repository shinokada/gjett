import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Nivå A1/A2');
});

test('a1 page has expected h1', async ({ page }) => {
	await page.goto('/a1');
	expect(await page.textContent('h1')).toBe('Nivå A1');
});

test('a2 page has expected h1', async ({ page }) => {
	await page.goto('/a2');
	expect(await page.textContent('h1')).toBe('Nivå A2');
});

test('b page has expected h1', async ({ page }) => {
	await page.goto('/b');
	expect(await page.textContent('h1')).toBe('Nivå B1/B2');
});

test('how to play page has expected h1', async ({ page }) => {
	await page.goto('/how-to-play');
	expect(await page.textContent('h1')).toBe('How to play');
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About');
});


