const users = [
    {
        name: "Ali",
        age: 30,
    },
    {
        name: "Ayşe",
        age: 29,
    },
    {
        name: "Fatma",
        age: 40,
    }

]

/*
push
map
find
filter
some
every
includes
*/

//push
// users.push("Ahmet");
// users.push("Mehmet");

// console.log(users)

//map
// users.map((item)=>{
//     console.log(item.name);
// })

//find
// const result = users.find((item) => item.name === "Ali" && item.age > 35);
// console.log(result);

//filter
// const filtered = users.filter(({ name, age }) => name === "Ali" && age < 20);
// console.log(filtered);

//some
// const some = users.some((item)=> item.age === 29);
// console.log(some);

//every
// const every = users.every((item) => item.age < 10);
// console.log(every);

//includes

const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal");
const isUserInc = users.includes("Ali");

console.log(isIncluded);
