function findByProperty(arr, property  , value){
    return arr.filter(obj=> obj[property]=== value);
}
const users=[
    {name: "merci", age:46, school:"INES"},

     { id: 1, name: "John", age: 20 },

     { id: 2, name: "Alice", age: 25 },

    { id: 3, name: "David", age: 20 }
];
console(findByProperty(users, age, 20));