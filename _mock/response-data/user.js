var Random = require('mockjs').Random;
var user = function(name){
    return {
        'name': name,
        'email': Random.email()
    }
}

module.exports = user;
