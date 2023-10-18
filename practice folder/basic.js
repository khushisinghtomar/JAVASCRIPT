// undefiend objects
var a;
console.log(a)  // outout will be  undefined


//undeclared 
 console.log(b)  // 

 
// event 
document.getElementById("name").onclick

// scope 

var a = 5

let a = 5
let a = 6 // not possible 
a = 7 // possible we can update the valye 


const a = 6 // we can't update the value or change it 



// this keyword

var details = {
    name : ' khushi',
    class: 6,
    age :12
    
}
console.log(this.name)



// arrow function 

let test= (a,b)=>{
     console.log(a+b)
}
test(2,3)

// numbers
const num = new Number(34)

console.log(num)


// Math method()

console.log(math.abs(-98))


/
//callback
function grandfather(father, callback){
    console.log(father)
    callback("shakunatala")
}
grandfather("maharaj singh",grandmother)

function grandmother(mother){
    console.log(mother)
}

// 
