var Class = function() {
    this.a = function() { // this is obj
        console.log('a');
        this.b(); // this is obj
    }

    this.b = function() {
        console.log('b');
    }
}

var obj = new Class();
obj.a(); // a and b