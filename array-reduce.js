const arr = [ 10, 34, 78, 18, 89, 23 ];

//  *** step 1
// const sum = arr.reduce( function(prev, curr) {
//     return prev + curr
// }, 0 ) 

// console.log(sum);


//  *** step 2
// const sum = arr.reduce( function(prev, curr) {
//     console.log("Prev: ", prev, "Current: ", curr )
//     return prev + curr
// }, 0 ) 

// console.log(sum);


//    ***  step 3

const arrs = [
    { name: "Someone 0", selary: 100 },
    { name: "Someone 0", selary: 200 },
    { name: "Someone 0", selary: 5600 },
    { name: "Someone 0", selary: 800 },
];

// const totalSelary = arrs.reduce(function( prev, Current) {
//     return prev + Current.selary
// }, 0)

// console.log(totalSelary);

//    ***  step 4

const person = {
    name: "Shahriyar",
    age: 22,
    address: {
        city: "Dhaka",
        sector: {
            naumber: 15,
            age: "old",
        },
        location: "Uttara"
    },
}

// console.log(person["address"])
console.log(person["address"]["sector"]["age"])
