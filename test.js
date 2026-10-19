const assert = require('assert');
const { greet, health } = require('./index');
assert.strictEqual(greet('Ada'), 'Hello, Ada, from aurora-web');
assert.deepStrictEqual(health(), { status: 'ok', service: 'aurora-web' });
console.log('ok');
