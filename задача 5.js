'use strict'

const purchase = {
    Electronics: [
        { name: 'Laptop', price: 1800 },
        { name: 'Keyboard', price: 100 },
        { name: 'Monitor', price: 1800},
    ],
    Textile: [
        { name: 'Bag', price: 50 },
        { name: 'Scarf', price: 35},
        { name: 'Glasses', price: 80}
    ],
    Furniture: [
        { name: 'Table', price: 700},
        { name: 'Mirror', price: 250},
        { name: 'Sofa', price: 2300},
        { name: 'Laptop', price: 1500 }
    ]
};
function find(obj, el){
    const result = []
    for(const key in obj){
        const items = obj[key]
        for(const item of items){
            if(item.name === el) result.push(item);
        }
    }return result
}
let searchElement = find(purchase, 'Laptop');
console.log(searchElement)
