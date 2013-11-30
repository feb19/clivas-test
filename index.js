var clivas = require('clivas');
var paint = require('paint');

var frame = 0;
var width = 0;

clivas.flush(false);
clivas.cursor(false);

'black white blue yellow green magenta'.split(' ').forEach(function(color, i) {
    console.log(i);
    console.log(color);
    clivas.alias('color-'+i, '2+inverse+'+color);
});

var draw = function() {
    clivas.clear();
    clivas.line('hello world (#frame '+frame+')');
    clivas.line('{red:also} {green:colors}!');
    clivas.write('[7m[32m[39m');
    frame++;
    
    clivas.line('{red+inverse:           }');

    width++;
    if (width > 20) return clivas.line('({red:boom!})');
    clivas.line('[{20+green:'+Array(width).join('=')+'>}]');
};

setInterval(draw, 200);
