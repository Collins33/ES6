//introduction of oop concepts like classes,constructor,class methods,inheritance

//setting up the class
class Polygon{
    //class constructor
    constructor(height,width){
     this.name="polygon";
     this.height=height;
     this.width=width;
    }
    //class method

    sayName(){
        console.log("Hi my name is " + this.name)
    }
//end of polygon class
}

//class square inherits from polygon
//extends is key word for inheritance
class Square extends Polygon{
    constructor(length){
        super(length,length)//call the parent
        this.name="square"
    }
    get area(){
        return this.height * this.width;
    }
//end of square class
}

let s=new Square(5)//instance of square class
console.log(s.name)
console.log(s.area)