// 1번
function sum(arr){
  var arraySum = 0;
  for(var i=0; i<arr.length;i++){
    arraySum += arr[i];
  }
  return arraySum;
}

// 2번
function max(arr){
  var arrMax = arr[0];
  for(var i=0;i<arr.length;i++){
    arrMax >= arr[i] ? arrMax : arrMax = arr[i];
  }
  return arrMax;
}

// 3번
function sumIf(arr,val){
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    arr[i] >= val ? sum += arr[i] : sum;
  }
  return sum;
}

// 4번
var inventory = [
	{name: 'apples', quantity: 2},
	{name: 'bananas', quantity: 0},
	{name: 'cherries', quantity: 5},
	{name: 'grapes', quantity: 10},
	{name: 'strawberries', quantity: 8}
];

function findIndex(inven, callback){
  for(var i=0; i < inven.length; i++ ){
    if(callback(inven[i])) return i;
  }
}

// 5번
function template(inven, callback){
  var result = '';
  for(var i=0; i < inven.length; i++ ){
     result += callback(inven[i]);
  }
  return result;
}

describe('배열의 숫자를 모두 더하는 sum함수를 만드시오',function(){
  it('arrSum',function(){
    expect(sum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
    expect(sum([10,20,77,3,12,8])).toBe(130);
  });
});

describe('배열에서 가장 큰 숫자를 찾는 max함수를 만드시오',function(){
  it('arrMax',function(){
    expect(max([1,2,4,10,3,7])).toBe(10);
    expect(max([2,10,-5,19,-4,20,12])).toBe(20);
  });
});

describe('특정 숫자 이상의 숫자만 합산하는 sumIf 함수를 만드시오',function(){
  it('sumIf',function(){
    expect(sumIf([4,5,2,1,5,6,4,7], 6)).toBe(13);
    expect(sumIf([3,-4,1,9,10,20], 10)).toBe(30);
  });
});





describe('콜백함수를 익히자', function() {
	describe('findIndex', function() {
		it('원하는 데이터의 index를 찾는다', function(){
			expect(
			  findIndex(inventory, function(fruit) {
				  return fruit.name === 'bananas';
			  })
			).toBe(1);
			expect(
			  findIndex(inventory, function(fruit) {
				  return fruit.name === 'cherries';
			  })
			).toBe(2);
		});
	});

	describe('template', function() {
		it('반복되는 데이터를 마크업으로 변환한다', function() {
			expect(
			  template(inventory, function(fruit) {
				  return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';
			  })
			).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>')
		});
	});
});
