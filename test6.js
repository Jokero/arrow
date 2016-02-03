'use strict';

var Class = function() {
    this.a = function() {
        console.log(this == global);    // false
        console.log(this == undefined); // true
    }
}

var obj = new Class();
var method = obj.a;

method();