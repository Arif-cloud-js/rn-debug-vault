const assert = require('node:assert/strict');
const { addLog, getLogs, clearLogs, getLogsByLevel } = require('./index');

addLog('info', ' this is test ');
addLog('error', 'Something went wrong');

console.log(getLogs());

try {
    addLog('exr', 'Invalid level test');
} catch (error) {
    console.log(error.message);
}
clearLogs();

addLog('info', 'Test message');

assert.equal(getLogs().length, 1);
assert.equal(getLogs()[0].level, 'info');
assert.equal(getLogs()[0].message, 'Test message');

assert.throws(
    () => addLog('exr', 'Invalid level test'),
    /Invalid log level/
);

assert.throws(
    () => addLog('info', ''),
    /Message must be a non-empty string/
);

assert.throws(
    () => addLog('', 'Test message'),
    /Level must be a non-empty string/
);

console.log('Input validation tests passed!');

clearLogs();

addLog('info', 'Information message');
addLog('error', 'Error message');
addLog('error', 'Another error message');

// Test filtering by log level
assert.equal(getLogsByLevel('error').length, 2);
assert.equal(getLogsByLevel('info').length, 1);
assert.equal(getLogsByLevel('warn').length, 0);

// Test clearing all logs
clearLogs();
assert.equal(getLogs().length, 0);

console.log('Filtering and clearing tests passed!');
