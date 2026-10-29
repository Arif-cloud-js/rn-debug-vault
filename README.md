# rn-debug-vault

A lightweight, in-memory logging utility for JavaScript and React Native projects.

## Features

- Store logs with `debug`, `info`, `warn`, and `error` levels.
- Automatically add an ISO timestamp to each log.
- Retrieve all stored logs.
- Filter logs by level.
- Clear all stored logs.
- Validate log levels and messages.

## Installation

```bash
npm install rn-debug-vault
```

## Usage

```javascript
const {
  addLog,
  getLogs,
  getLogsByLevel,
  clearLogs
} = require('rn-debug-vault');

// Add logs
addLog('info', 'Application started');
addLog('error', 'Something went wrong');

// Retrieve all logs
console.log(getLogs());

// Retrieve only error logs
console.log(getLogsByLevel('error'));

// Clear all logs
clearLogs();
```

## Log format

Each log is an object containing the level, message, and timestamp.

```javascript
{
  level: 'error',
  message: 'Something went wrong',
  timestamp: '2026-10-28T11:06:15.788Z'
}
```

## Important notes

- Logs are stored in memory and are lost when the process restarts.
- This version does not provide persistent storage.
- Invalid log levels and empty messages throw errors.

## License

MIT
