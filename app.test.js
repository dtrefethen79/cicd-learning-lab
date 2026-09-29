const test = require("node:test");
const assert = require("node:assert/strict");
const { greeting } = require("./app");

test("greeting returns the expected message", () => {
  assert.equal(greeting(), "Hello, CI/CD!");
});
