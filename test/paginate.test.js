import test from "node:test";
import assert from "node:assert/strict";
import { paginate, pageCount } from "../src/paginate.js";

test("first page", () => {
  assert.deepEqual(paginate([1, 2, 3, 4, 5], 1, 2), [1, 2]);
});
test("short last page", () => {
  assert.deepEqual(paginate([1, 2, 3, 4, 5], 3, 2), [5]);
});
test("page count", () => {
  assert.equal(pageCount(5, 2), 3);
  assert.equal(pageCount(0, 2), 0);
});
