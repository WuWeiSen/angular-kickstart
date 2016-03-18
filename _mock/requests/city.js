var $ = require('fms');

$.ajax({
    title: '获取全球热门城市',
    url: '/global_hot_cities',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                data: user('wws')
            };
        }
    }
});

$.ajax({
    title: '获取板块的城市',
    url: '/plate_cities',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                data: systemMenus
            };
        }
    }
});

$.ajax({
    title: '搜索全球的城市',
    url: '/global_cities/search',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                data: address
            };
        }
    }
});
