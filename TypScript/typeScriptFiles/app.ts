
function App(user: string){
    return  "Hello " + user;  // This just to enshur that whatever i type will be string
}
let myname = "Ahmed";
// let num: string = "Number";
// let testnum = parseInt(num);
// let myname = prompt("Please enter your name");
// document.getElementById("zero").innerHTML = num;
document.getElementById("first").innerHTML = App(myname);


interface person {
    firstName: string;
    secondName: string;
    items: number[];
}
function defineName(someOne: person){
    return "Hello " + someOne.firstName + " " + someOne.secondName + ", you have these items: " +someOne.items;
}
let yourName = {firstName: "Ahmed", secondName: "Mohamed", items:[2,8,6]};

document.getElementById("second").innerHTML = defineName(yourName);

class developer{
    fullname: string;
    email: string;
    constructor(firstname: string, secondname: string){
        this.fullname = firstname + " " + secondname;
        this.email = firstname + "." + secondname + "@gmail.com";
    }
    task(){
        return this.fullname + " develops reactJs programs";
    }
}

class student extends developer{
    topic: string[];
    constructor(firstname: string, secondname: string, topic: string[]){
        super(firstname, secondname);
        this.topic = topic;
    }
    task(){
        return this.fullname + " studies" + this.topic.map(subTobic => {return " "+subTobic});
    }
}


let person1 = new developer("Ahmed", "hassan");
let person2 = new student("Ahmed", " Ali", ["Software Engineering","DataBases","CyberSecurity"])
document.getElementById("third").innerHTML = person1.task();
document.getElementById("forth").innerHTML = person2.task();
