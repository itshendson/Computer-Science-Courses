var start = Date.now();
setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start
    console.log((Math.floor(delta / 1000))); // in seconds
    // output(new Date().toUTCString());
}, 1000); // update about every second