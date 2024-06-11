class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    class Emp extends Person{
    constructor(id,org,mobile,name,age){
        super(name,age);
        this.id=id;
        this.org=org;
        this.mobile=mobile;
    }
    empDetails(){
        return this.name+" "+this.age+" "+this.mobile;
    }
}
Emp=new Emp(123,"SBI",141410100128543,"kumar",21);
let res=Emp.empDetails();
console.log(res);
