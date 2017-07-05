/* 
Module Description
Load envirment setting to the module
*/
var env = {};

// Import variables if present (from env.js)
if (window) {
    Object.assign(env, window.__env);
}
angular
    .module('app', [])
//enable or disable log function
    .config(function($logProvider){
        $logProvider.debugEnabled(false);
    })
    .constant('__env', env)

