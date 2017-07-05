/*
Environment config setting
*/
(function (window) {
    window.__env = window.__env || {};

//    // API url
//    window.__env.apiUrl = "";

    // Base url
    window.__env.baseUrl ="http://localhost:8080";
//'https://gentle-headland-34043.herokuapp.com'
    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
}(this));
