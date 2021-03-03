"use strict";
let anyFlag;
function loInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
loInfo('I am data');
function mult(a, b) {
    if (a && b) {
        return a * b;
    }
    return 0;
}
