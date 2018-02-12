//the let key-word provides block level scope
//this means it is only available only in the block

function letTest(){
    let x=30
    word=true
    if(word){
        let x=35
        //this value of x is only available within the scope ie in the if scope
        console.log(x)
    }
    console.log(x)
}

letTest()

//const ensures you cannot reassign the variable

function throwError(){
const name=10
name=12
console.log(name)
}
//it will intentionaly throw an error because i am trying to reassign it
throwError()