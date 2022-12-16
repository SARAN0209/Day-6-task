
class movie {
    constructor(title,studio,pg){
        this.title=title;
        this.studio=studio;
        this.pg=[13];
    }
}
var m1=new movie("Captain America","Iron Man");
var m2=new movie("Avangers","Spider Man")
console.log(m1);
console.log(m2);


// 3.person details

class person{
    constructor(firstname,lastname,age,qualification,address,phonenumber){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.qualification=qualification;
        this.address=address;
        this.phonenumber=phonenumber;
 
    }
  
}
 
var person1=new person("Saran","C",25,"BE","Tirupattur",9876543210);
console.log(person1);
var person2=new person("Niran","S",23,"MBA","vellore",9876543211);
console.log(person2);