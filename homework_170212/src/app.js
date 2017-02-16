//const tplList = require('./list.hbs');
import tplList from './list.hbs';
//const tplMain = require('./main.hbs');
import tplMain from './main.hbs';
import tplLayer from './layer.hbs';
import ajax from './ajax';
const $ = require('jquery');


ajax('/data.json', data => data + 1);
ajax('http://api.openweathermap.org/data/2.5/forecast/daily?q=seoul&mode=json&units=metric&cnt=7&apikey=8d554a626fc5d01d77812b612a6de257',function(data){
    //console.log(data);
    return data;
});
[].map(v => v + 1);
[{price: 300}].filter(v => v.price > 200);
[{price: 300}].filter((v,i,a) => {
    // console.log(i);
    // console.log(a);
    return v.price > 200
});


$('#root').html(tplMain({}));

const list = [{
    href: 'http://www.naver.com',
    name: 'naver'
}, {
    href: 'http://www.daum.net',
    name: 'daum'
}];

$('[data-view="list"]').html(tplList({
    list: list
}));

let flag = false;

$('.mdl-button:first').on('click',() => {
    if(flag) flag = false, $('#tabel-layer').html('');
    else {
        flag = true,
        ajax('/data.json', (data) => {
            let total = 0;
            data.fruits.map(val => total += val.price);
            return $('#tabel-layer').append(tplLayer({
                fruits : data.fruits,
                total : total
            }));
        });
    }
});


$('.mdl-button:last').on('click',() => {
    if(flag) flag = false, $('#tabel-layer').html('');
    else {
        flag = true,
        ajax('http://api.openweathermap.org/data/2.5/forecast/daily?q=seoul&mode=json&units=metric&cnt=7&apikey=8d554a626fc5d01d77812b612a6de257', (data) => {
            console.log(data);
            const weatherData = data.list.map(function(val){
                return {
                    newDate : new Date(val.dt),
                    day : val.temp.day+'도'
                };
            });
            return $('#tabel-layer').append(tplLayer({
                weather : weatherData,
            }));
        });
    }
});