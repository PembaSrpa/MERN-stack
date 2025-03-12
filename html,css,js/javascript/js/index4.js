// const fun = (a, b=0) =>{
//     console.log(`${a} ${b}`);
// };
// fun(12);

// fun(12, 15);

// const obj = {
//     name: "John",
//     age: 30,
// };
// const {name , age} = obj;

// console.log(name, age);
// console.log(obj);

// const arr = [1,2,3,5,4,8,6,7,4,5];
// const [f,s] = arr;
// console.log(f,s);
// const [a,b, ...baki] = arr;
// console.log(a,b,baki);
// const newarr = [1,2,3,4,5,67, ...arr];
// console.log(newarr);

// const user ={
//     name : "John",
//     email : "John@gmail.com",
//     password : "password",
// }
// const {password , ...others} = user;
// console.log(others);

const user = [
    {
        name : "John",
        email : "john@gmail.com",
        password : "password",
    },
    {
        name : "Ram",
        email : "ram@gmail.com",
        password : "ram123",
    },
    {
        name : "Jerry",
        email : "jerry@gmail.com",
        password : "jerry456",
    }
];
const p1 = user.map((person) => {
    return {
        name: person.name,
        email: person.email
    };
});
console.log(p1);

const names = user.map(person => person.name);
console.log(names);
const formattedUsers = user.map((person, index) => {
    return `User ${index + 1}: ${person.name} (${person.email})`;
});
console.log(formattedUsers);