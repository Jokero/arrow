var Class = function() {
    this.a = () => {
        console.log(this);      // { a: [Function] }
        console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
    }
}

var obj = new Class(1, 2, 3);
obj.a(123);