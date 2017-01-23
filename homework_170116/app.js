// 1번

function max(arg){
    var maxArr = '';
    if(typeof arg === 'object') maxArr = arg;
    else maxArr = arguments;

    for(var i=0, resultValue = maxArr[0]; i<maxArr.length; i++){
        resultValue >= maxArr[i] ? resultValue : resultValue = maxArr[i];
    }

    return resultValue;
}

function min(arg){
    var minArr = '';
    if(typeof arg === 'object') minArr = arg;
    else minArr = arguments;

    for(var i=0, resultValue = minArr[0]; i<minArr.length; i++){
        resultValue >= minArr[i] ? resultValue = minArr[i] : resultValue;
    }

    return resultValue;
}

function sum(arg){
    var sumArr = '';
    if(typeof arg === 'object') sumArr = arg;
    else sumArr = arguments;

    for(var i=0, resultValue = 0; i< sumArr.length; i++){
        resultValue += sumArr[i];
    }

    return resultValue;
}


describe('max',function(){
  it('max',function(){
      expect( max(1,5,6,3,2,10,4)).toBe(10),
      expect( max([4,6,3,2,7,11,1]) ).toBe(11)
  });
});

describe('min',function(){
    it('min',function(){
        expect( min(1,5,6,3,2,10,4)).toBe(1),
            expect( min([4,6,3,2,7,11,20]) ).toBe(2)
    });
});

describe('sum',function(){
    it('sum',function(){
        expect( sum(1,5,6,3,2,10,4)).toBe(31),
        expect( sum([4,6,3,2,7,11,20]) ).toBe(53)
    });
});


// 2번 (자판기)

var vendingMachine = function(){
    this.power = false;
    this.throwMoney = 5000;
    this.insertCoin = '';
};

var vendingMachineAction = {
    getProduct : function(product, money){
        console.log(this)
    }
}

vendingMachine.prototype.aaa = vendingMachineAction