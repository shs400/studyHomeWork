var data = {
    "fruits":[{
        "name":"사과",
        "quantity":30,
        "price":500,
        "color":'red'
    }, {
        "name":"바나나",
        "quantity":40,
        "price":1500,
        "color":'yello'
    }, {
        "name":"딸기",
        "quantity":25,
        "price":2000,
        "color":'red'
    }, {
        "name":"포도",
        "quantity":55,
        "price":1800,
        "color":'puple'
    }, {
        "name":"키위",
        "quantity":100,
        "price":4200,
        "color":'green'
    }, {
        "name":"수박",
        "quantity":15,
        "price":9800,
        "color":'green'
    }, {
        "name":"감",
        "quantity":250,
        "price":2300,
        "color":'orange'
    }],
    "numbers":[50, 20, 123, 12, 33, 46, 70, 21, 56, 560],
    "stringNumbers":["50", "20", "123", "12", "33", "46", "70", "21", "56", "560"]
}


function fruitsPrice(data){
    return data.fruits;
};


// 1번
var test01 = function(data){
    var price4000 = [];
    var price = fruitsPrice(data).filter(function(num){
        if(num.price >= 4000) price4000.push(num);
    });
    return console.log(price4000);
};
//test01(data);

// 2번
var test02 = function(data){
    var price4000Name = [];
    var priceName = fruitsPrice(data).filter(function(num){
        if(num.price >= 4000) price4000Name.push(num.name);
    });
    return console.log(price4000Name);
};
//test02(data);

// 3번
var test03 = function(data){
    var priceName = fruitsPrice(data).sort(function(a,b){
        return a.price > b.price;
    });
    console.log(priceName);
};
//test03(data);


// 4번
var test04 = function(data){
    var fruitsArr = [];
    var priceName = fruitsPrice(data).map(function(value){
        value.quantity = value.quantity +'개';
        value.price = value.price +'원';
        return value;
    });
    console.log(priceName);
};
//test04(data);


// 5번,6번
var fruits = data;
var createTable = function(fruits){
    var valArr = [];
    fruits.fruits.map(function(val){
        valArr.push('<tr><td>'+val.name+'</td><td>'+val.quantity+'</td><td>'+val.price+'</td></tr>')
    });
    return '<table>'+valArr.join('')+'</table>';
};
createTable(fruits);

describe('test',function(){
    it('test',function(){
        expect(createTable(fruits)).toBe('<table><tr><td>사과</td><td>30</td><td>500</td></tr><tr><td>바나나</td><td>40</td><td>1500</td></tr><tr><td>딸기</td><td>25</td><td>2000</td></tr><tr><td>포도</td><td>55</td><td>1800</td></tr><tr><td>키위</td><td>100</td><td>4200</td></tr><tr><td>수박</td><td>15</td><td>9800</td></tr><tr><td>감</td><td>250</td><td>2300</td></tr></table>')
    });
});

// 6번
var createTable2 = function(fruits){
    var valArr = [];
    var fruitsArr = fruits.fruits
    for(var key in fruitsArr){
        valArr.push('<tr><td>'+fruitsArr[key].name+'</td><td>'+fruitsArr[key].quantity+'</td><td>'+fruitsArr[key].price+'</td></tr>');
    }
    return '<table>'+valArr.join('')+'</table>';
};
createTable2(fruits);

describe('test2',function(){
    it('test2',function(){
        expect(createTable2(fruits)).toBe('<table><tr><td>사과</td><td>30</td><td>500</td></tr><tr><td>바나나</td><td>40</td><td>1500</td></tr><tr><td>딸기</td><td>25</td><td>2000</td></tr><tr><td>포도</td><td>55</td><td>1800</td></tr><tr><td>키위</td><td>100</td><td>4200</td></tr><tr><td>수박</td><td>15</td><td>9800</td></tr><tr><td>감</td><td>250</td><td>2300</td></tr></table>')
    });
});