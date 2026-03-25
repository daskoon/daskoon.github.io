const assert = require('node:assert');
const { test } = require('node:test');
const { isDataURL } = require('./utils.js');

test('isDataURL identifies data URLs', () => {
  assert.strictEqual(isDataURL('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='), true);
  assert.strictEqual(isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=='), true);
});

test('isDataURL rejects non-data URLs', () => {
  assert.strictEqual(isDataURL('https://example.com'), false);
  assert.strictEqual(isDataURL('http://example.com'), false);
  assert.strictEqual(isDataURL('file:///path/to/file'), false);
});

test('isDataURL handles invalid URLs', () => {
  assert.strictEqual(isDataURL('not-a-url'), false);
  assert.strictEqual(isDataURL(''), false);
  assert.strictEqual(isDataURL(null), false);
});
