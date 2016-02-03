var _ = require('lodash');

// module.exports - изначально пустой объект
console.log('is module.exports empty?', _.isEmpty(module.exports)); // true

module.exports = {
    method: () => {
        // this в данном случае будет указывать на исходное значение module.exports, т. е. на exports
        console.log('this == module.exports', this == module.exports); // false
        console.log('this == exports', this == exports); // true
    }
};