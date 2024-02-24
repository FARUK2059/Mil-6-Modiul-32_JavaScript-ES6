//  for of loop

const cars = ["BMW", "Volvo", "Mini"]; 
let text = "";

for (let x of cars) {
  text += x + " ";
}

//  creat a new class

class Valos {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  let p='Javascript'; 
let q=p; 
p='React'; 
// console.log(q);

const isTrue=true;
// console.log(!isTrue ? "hello" : "world")


const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
//    console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);