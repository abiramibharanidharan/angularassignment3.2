// drivable interface is created 
interface drivable
{
    start():void
    drive():void
    getPosition(position:string):void
}
// car class implement the interface drivable and include all the property
class car implements drivable
{
    constructor(public name:string){}
    start():void
    {
        console.log(this.name + " = is started")
    }
    drive():void
    {
        console.log("Its drive fastly")
    }
    getPosition(position:string):void
    {
        console.log(this.name +"  position is always   "+ position)
    }
}
//instance of class object is created
let Adi= new car("Adi")
//through the object method is called
Adi.start()
Adi.drive()
Adi.getPosition("No:1")
//instance of class secound object is created
let Ford= new car("Ford Icon")
//through the object method is called
Ford.start()
Ford.drive()
Ford.getPosition("No:2")
