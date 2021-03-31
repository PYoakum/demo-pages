const helperScript = require('helper-script');

async function init(){
    helperScript('initializing script');
}

window.addEventListener ?
window.addEventListener("load", init, false) :
window.attachEvent && window.attachEvent("onload", init);
