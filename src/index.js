
const logs = [];
const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];
function addLog(level, message) {
  
     if(typeof level !== 'string' || !level.trim() )
  {
    throw new Error('Level must be a non-empty string');
    
  }
  if(typeof message !=='string' || !message.trim() ){
    throw new Error('Message must be a non-empty string');
  }
  if (!LOG_LEVELS.includes(level.trim())) {
       throw new Error(
    'Invalid log level. Use debug, info, warn, or error.');
  }
    const log = {
        level:level.trim(),
        message:message.trim(),
        timestamp: new Date().toISOString()
    };
 
    logs.push(log);
    return log;
}
function clearLogs(){
    logs.length=0;
}

function getLogs() {
    return [...logs];
}
function getLogsByLevel(level){
    if (typeof level !== 'string' || !level.trim()) {
    throw new Error('Level must be a non-empty string');
}

if (!LOG_LEVELS.includes(level.trim())) {
    throw new Error(
        'Invalid log level. Use debug, info, warn, or error.'
    );
}
  return logs.filter(log=>
     log.level===level.trim()
  )
}
module.exports = {
    addLog,
    getLogs,
    clearLogs,
    getLogsByLevel
};
