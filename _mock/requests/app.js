var $ = require('fms');
var user = require('../response-data/user');
var systemMenus = require('../response-data/system_menus');

$.ajax({
    title: '用户',
    url: '/user',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                user: user('wws')
            };
        }
    }
});

$.ajax({
    title: '个人菜单',
    url: '/system_menus',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                systemMenus: systemMenus
            };
        }
    }
});