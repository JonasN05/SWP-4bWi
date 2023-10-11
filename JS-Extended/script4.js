localStorage.setItem('name', 'Bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');


sessionStorage.setItem('name', 'John');
sessionStorage.setItem('name', 'Bob');
console.log(sessionStorage.getItem('name'));
//sessionStorage.removeItem('name');


document.cookie = 'name=Kyle; expires=' + new Date(2024,0,2).toUTCString();
document.cookie = 'lastname=Smtih; expires=' + new Date(2024,0,2).toUTCString();

console.log(document.cookie);