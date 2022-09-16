'use strict';

const componentInput = require('..');
const assert = require('assert').strict;

assert.strictEqual(componentInput(), 'Hello from componentInput');
console.info("componentInput tests passed");
