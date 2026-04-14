import assert from "node:assert/strict";
import {
  buildCompatibilityRelationshipPrompt,
  COMPATIBILITY_RELATIONSHIP_OPTIONS,
  DEFAULT_COMPATIBILITY_RELATIONSHIP,
} from "./compatibilityRelationship";

assert.equal(DEFAULT_COMPATIBILITY_RELATIONSHIP, "intimate");
assert.deepEqual(
  COMPATIBILITY_RELATIONSHIP_OPTIONS.map((option) => option.id),
  ["intimate", "friendship", "cooperation"]
);

assert.match(buildCompatibilityRelationshipPrompt(), /亲密关系/);
assert.match(buildCompatibilityRelationshipPrompt("intimate"), /情感连接/);
assert.match(buildCompatibilityRelationshipPrompt("friendship"), /友情/);
assert.match(buildCompatibilityRelationshipPrompt("friendship"), /边界感/);
assert.match(buildCompatibilityRelationshipPrompt("cooperation"), /合作/);
assert.match(buildCompatibilityRelationshipPrompt("cooperation"), /利益分配/);
