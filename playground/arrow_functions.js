const square = (x) => x * x;
console.log(square(9));


const user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(`Hi ${this.name}`); //this prints hi undefined because arrow functions doesn't support this keyboard
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi ${this.name}`) //new ES6 syntax
    }
};


user.sayHiAlt(1,2,3);