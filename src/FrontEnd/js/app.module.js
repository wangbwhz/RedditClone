var env = {};

// Import variables if present (from env.js)
if(window){  
  Object.assign(env, window.__env);
}
angular
    .module('app', [])
    .constant('__env', env);