var Class = function() {
    this.a = () => {
        console.log(this); // { a: [Function] }
    }
}

var obj = new Class();
var method = obj.a;

method();