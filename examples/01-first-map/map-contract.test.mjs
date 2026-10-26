import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const map = JSON.parse(readFileSync(new URL("./first-map.tmj", import.meta.url), "utf8"));

test("map dimensions and tile data are internally consistent", () => {
  assert.equal(map.type, "map");
  assert.equal(map.orientation, "orthogonal");
  assert.ok(Number.isInteger(map.width) && map.width > 0);
  assert.ok(Number.isInteger(map.height) && map.height > 0);
  assert.ok(Number.isInteger(map.tilewidth) && map.tilewidth > 0);
  assert.ok(Number.isInteger(map.tileheight) && map.tileheight > 0);

  const ground = map.layers.find((layer) => layer.name === "Ground");
  assert.ok(ground, "Ground tile layer must exist");
  assert.equal(ground.type, "tilelayer");
  assert.equal(ground.data.length, map.width * map.height);
  assert.ok(ground.data.every((gid) => Number.isInteger(gid) && gid >= 0));
});

test("quest markers have unique IDs and stable checkpoint keys", () => {
  const markers = map.layers.find((layer) => layer.name === "Quest Markers");
  assert.ok(markers, "Quest Markers object layer must exist");
  assert.equal(markers.type, "objectgroup");
  assert.ok(markers.objects.length >= 2);

  const objectIds = markers.objects.map((object) => object.id);
  const checkpointIds = markers.objects.map((object) =>
    object.properties?.find((property) => property.name === "checkpoint_id")?.value
  );
  assert.equal(new Set(objectIds).size, objectIds.length, "object IDs must be unique");
  assert.ok(checkpointIds.every((id) => typeof id === "string" && id.length > 0));
  assert.equal(new Set(checkpointIds).size, checkpointIds.length, "checkpoint IDs must be unique");
});

test("quest markers are points within map bounds and permit safe recovery", () => {
  const markers = map.layers.find((layer) => layer.name === "Quest Markers");
  const mapPixelWidth = map.width * map.tilewidth;
  const mapPixelHeight = map.height * map.tileheight;

  for (const object of markers.objects) {
    assert.equal(object.point, true, `${object.name} should be a point marker`);
    assert.ok(object.x >= 0 && object.x < mapPixelWidth, `${object.name} x is out of bounds`);
    assert.ok(object.y >= 0 && object.y < mapPixelHeight, `${object.name} y is out of bounds`);
    assert.equal(
      object.properties?.find((property) => property.name === "manual_fallback_allowed")?.value,
      true,
      `${object.name} must allow a documented fallback`,
    );
  }
});
