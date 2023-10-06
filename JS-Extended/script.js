const items = [
    {name: 'bike', price:100},
    {name: 'tv', price:45},
    {name: 'phone', price:455},
    {name: 'cap', price:78},
    {name: 'keyboard', price:345},
    {name: 'computer', price:125},
    {name: 'boots', price:99},
]

const filteredItems = items.filter(function(item){
    return item.price <=100;
})
console.log (filteredItems);


const itemNames = items.map(function(item){
    return item.name;
})
console.log (itemNames);


const foundItem = items.find(function(item){
    return item.name === 'bike';
})
console.log (foundItem);
console.log("");


items.forEach(function(item){
    console.log(item);
})
console.log("");


const hasInexpensiveItems = items.some(function(item){
    return item.price===100;
})
console.log(hasInexpensiveItems);


const allTheSame = items.every(function(item){
    return item.price<=100;
})
console.log(allTheSame);


const total = items.reduce(function(currentTotal, item){
    return item.price + currentTotal;
}, 0)
console.log(total);
console.log("");


const numbers = [1,2,3,4,5];
const includesTwo = numbers.includes(2)
console.log(includesTwo);