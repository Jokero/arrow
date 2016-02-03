var Class = function() {
    this.a = () => { // this is obj
        console.log('a');
        this.b(); // this is obj (this определится в момент создания экземпляра)
    }

    this.b = () => {
        console.log('b');
    }
}

var obj = new Class();
obj.a(); // a and b