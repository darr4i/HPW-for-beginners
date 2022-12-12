'use strict'

const items = [
    { price: -40 },
    { price: 120 },
    { price: '505' },
    { price: 350 }
];
function calculate(obj) {
 let sum = 0;
 for(const item of obj){
     if(typeof item.price !== 'number' || item.price < 0) {
         throw `price isn't valid`
     } else{
         sum += item.price;
     }
 }
 return sum;
}
try{
    console.log(calculate(items))
} catch(error){
    console.log(error)
}
