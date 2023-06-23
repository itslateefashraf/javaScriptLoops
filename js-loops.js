// For loop
// For loop is a control flow statement used in programming to repeatedly execute a block of code for a specfic no
// of times
let numbers =[10,20,30,40,50]
let total = 0;
for(let i=0; i< numbers.length; i++){
    total += numbers[i]
}
console.log(total);

// while loope
// while loop is a control flow structure in programming that allows a set of instructions to be repeatedly
// executed as long as specific contition is true.
 let i = 0;
 while(i<=10){
     console.log('hello');
     i++
 }

 let no =[2,3,4,5,6,7,8]
 let sum = 0;
 let j = 0;
 while(j < no.length){
     sum += no[j]
     j++
 }
 console.log(sum);

// do while loop
// do while loop is control flow statement in programming that executes a block of code repeatedly untill a 
// specific condition is true.do while loop executes the block at least once before checking the loop condition.
let k =1;
 do{
    console.log('hello')
    k++
 }while(k>10);
 

// for each loop
let number = [2,22,10,12,50]
let totalNumber = 0;
number.forEach(sumOfNumber)
function sumOfNumber(value){
totalNumber = totalNumber + value
}
console.log(totalNumber);

// for in loop
// for in loop construct used to iterate over a collection of elements.

let cars = ['alto','santro','maruti','baleno']
for(let key in cars){
    console.log(cars[key])
}

// for of loop
// for of loop construct used  to iterate over a iterable objects such as array,string,maps etc.

let people =['aabid','arslan','farhan','faheem']
for(let name of people){
    console.log(name);
}


let text = "hello"
for(let char of text){
    console.log(char);
}
