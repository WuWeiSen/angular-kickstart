var Mock = require('mockjs');

module.exports = function() {
    return Mock.mock({
        'employees|3': [{
            'id|+1': 1,
            'name': Mock.Random.cname()
        }]
    });
}
