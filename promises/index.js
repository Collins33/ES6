//promises

var longFn=function(){
    return new Promise(function(res,req){
        setTimeout(res,1000)
    })
}

var coolFn=function(){
    console.log("i promised")
}

longFn().then(coolFn)

//create a promise that calls res after 1 second then immediately calls the coolFn method