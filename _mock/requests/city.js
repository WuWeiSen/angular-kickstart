var $ = require('fms');
var hotCity = require('../response-data/global_hot_city');
var plateCities = require('../response-data/plate_cities');
var searchCities = require('../response-data/search_cities');


$.ajax({
    title: '获取全球热门城市',
    url: '/global_hot_cities',
    type: 'GET',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                data: hotCity
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
        ok: function(request) {
            return {
                data: plateCities(request.query)
            };
        }
    }
});

$.ajax({
    title: '搜索全球的城市',
    url: '/global_cities/search',
    type: 'POST',
    dataType: 'json',
    res: {
        ok: function() {
            return {
                data: searchCities
            };
        }
    }
});
