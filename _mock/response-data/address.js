var Random = require('mockjs').Random;
var address = {
        id: Random.integer(1, 5),
        nickname: '我家',
        username: Random.cname(),
        mobile: '135' + Random.string('number', 8),
        phone: '0755' + Random.string('number', 8),
        isDefault: Random.boolean(),
        zipCode: Random.string('number', 5)
    }

module.exports = address;
