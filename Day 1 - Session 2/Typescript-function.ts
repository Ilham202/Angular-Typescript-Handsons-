class Rectangle{
    area=(x:number,y:number)=>{
        console.log("Area is : "+ (x*y));
    }
}

let rect=new Rectangle();
console.log(rect.area(3,5));