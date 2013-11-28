var clivas = require('clivas');

var frame = 0;

setInterval(function() {
    clivas.clear(); // clears the canvas
    clivas.line('hello world (#frame '+frame+')');
    clivas.line('{red:also} {green:colors}!');
    frame++;
}, 200);
