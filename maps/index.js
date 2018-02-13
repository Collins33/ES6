let x=new Map([[1,'is a number key']])

//get the date today
let today=new Date()
console.log("today"+today)

//set method that adds to the map
x.set(today,222)
x.set("collins","samsung")
x.set(true,"adult")
console.log(x)

//has method,check if a value exists by passing a key
//returns a boolean
console.log(x.has("collins"))

//get method,returns the value of the passed key
console.log(x.get(today))

//delete,deletes value of passed key
x.delete("collins")
console.log(x)


//methods to get information about the map

//size returns the number of values
console.log(x.size)

//entries() returns entries in their order
console.log(x.entries())

//keys() returns keys in their order
console.log(x.keys())

//values() returns the values
console.log(x.values())


//iterating over maps
console.log(".........................")
//this will iterate over the map and print each key value pair as a list
for(let value of x){
    console.log(value)
}

//this will print out the values
for(let value of x.values()){
    console.log(value)
}

//this will print out the keys
for(let value of x.keys()){
    console.log(value)
}


//will print out the key and values
for (let value of x.entries()) {
    console.log(value);
}