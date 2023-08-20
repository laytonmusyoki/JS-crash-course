class Fruit{
    constructor(fruitname,taste){
        this.name=fruitname;
        this.color="green";
        this.taste=taste;
    }
    showInfo(){
        console.log(this.name+" is " +this.color+" in color "+ "but very "+this.taste);
    }
}
var x=new Fruit("mango","sweet");
// console.log(x.name,x.color,x.taste)
x.showInfo()