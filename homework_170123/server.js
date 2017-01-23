var http = require('http');
var data = require('./data.json');

var server = http.createServer(function(request, response){
    response.end(JSON.stringify(data[request.url.substr(1)]));
});

server.listen(2000, function(){
    function fruitsPrice(data){
        return data.fruits
    };

    var test01 = function(){
        var price4000 = [];
        var price = fruitsPrice(data).filter(function(num){
            if(num.price >= 4000) price4000.push(num);
        });
        return console.log(price4000);
    };
    test01();

    var test02 = function(){
        var price4000Name = [];
        var priceName = fruitsPrice(data).filter(function(num){
            if(num.price >= 4000) price4000Name.push(num.name);
        });
        return console.log(price4000Name);
    };
    test02();

    var test03 = function(){
        var priceName = fruitsPrice(data).sort(function(a,b){
            return a.price > b.price;
        });
        console.log(priceName);
    };
    test03();

    var test04 = function(){
        var fruitsArr = [];
        var priceName = fruitsPrice(data).map(function(value){
            value.quantity = value.quantity +'개';
            value.price = value.price +'원';
            return value;
        });
        console.log(priceName);
    };
    test04();

    console.log('서버가 실행되었습니다');
});