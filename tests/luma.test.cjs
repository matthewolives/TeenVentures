const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const source = ts.transpileModule(fs.readFileSync('lib/luma.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const mod = { exports: {} };
new Function('exports', 'require', 'module', source)(mod.exports, require, mod);
const { normalizeEvents, fetchUpcomingEvents } = mod.exports;
const event = { api_id: 'a', name: 'Event', start_at: '2030-01-01T18:00:00Z', url: 'abc', visibility: 'public', location_type: 'meet' };
test('normalizes links, dates, location and missing covers', () => {
  const [result] = normalizeEvents([{ event }], 0);
  assert.equal(result.href, 'https://lu.ma/abc');
  assert.equal(result.image, '/soon.png');
  assert.equal(result.location, 'Google Meet');
  assert.match(result.date, /19:00/);
});
test('filters past/private/unapproved/invalid events and unsafe links, deduplicates and sorts', () => {
  const entries = [event, event, { ...event, api_id: 'b', start_at: '2029-01-01' }, { ...event, api_id: 'past', start_at: '2000-01-01' }, { ...event, visibility: 'private' }, { ...event, url: 'javascript:alert(1)' }, { ...event, start_at: 'bad' }].map(event => ({ event }));
  entries.push({ event: { ...event, api_id: 'pending' }, status: 'pending' });
  assert.deepEqual(normalizeEvents(entries, Date.parse('2026-01-01')).map(x => x.id), ['b', 'a']);
  assert.deepEqual(normalizeEvents([], 0), []);
});
test('paginates the public feed and handles unavailable responses', async () => {
  const original = global.fetch;
  const originalError = console.error;
  try {
    const urls = [];
    global.fetch = async url => {
      urls.push(String(url));
      return { ok: true, json: async () => urls.length === 1 ? { entries: [{ event }], has_more: true, next_cursor: 'page2' } : { entries: [{ event: { ...event, api_id: 'b' } }], has_more: false } };
    };
    assert.equal((await fetchUpcomingEvents()).events.length, 2);
    assert.match(urls[1], /pagination_cursor=page2/);
    global.fetch = async () => ({ ok: false, status: 503 });
    console.error = () => {};
    assert.deepEqual(await fetchUpcomingEvents(), { events: [], unavailable: true });
  } finally { global.fetch = original; console.error = originalError; }
});
