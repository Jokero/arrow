var Class = function() {
    this.a = function() {
        console.log(this == global); // true
    }
}

var obj = new Class();
var method = obj.a;

method();