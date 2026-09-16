import test from 'node:test';
import assert from 'node:assert/strict';
import { fixtures, inspect } from '../app.js';
const expected = { 'rss-valid': ['PASS','RSS_VALID'], 'atom-valid': ['PASS','ATOM_VALID'], 'xml-malformed': ['FAIL','MALFORMED_XML'], oversized: ['FAIL','SIZE_LIMIT'], 'instruction-injection': ['FAIL','SUSPICIOUS_CONTENT'] };
test('all checked-in fixtures have deterministic verdicts', () => { for (const fixture of fixtures) assert.deepEqual(Object.values(inspect(fixture.content)).slice(0,2), expected[fixture.id], fixture.id); });
test('inspection has no network dependency', () => { assert.equal(inspect('<feed></feed>').rule, 'ATOM_VALID'); });
