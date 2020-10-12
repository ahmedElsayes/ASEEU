var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function App(user) {
    return "Hello " + user; // This just to enshur that whatever i type will be string
}
var myname = "Ahmed";
// let num: string = "Number";
// let testnum = parseInt(num);
// let myname = prompt("Please enter your name");
// document.getElementById("zero").innerHTML = num;
document.getElementById("first").innerHTML = App(myname);
function defineName(someOne) {
    return "Hello " + someOne.firstName + " " + someOne.secondName + ", you have these items: " + someOne.items;
}
var yourName = { firstName: "Ahmed", secondName: "Mohamed", items: [2, 8, 6] };
document.getElementById("second").innerHTML = defineName(yourName);
var developer = /** @class */ (function () {
    function developer(firstname, secondname) {
        this.fullname = firstname + " " + secondname;
        this.email = firstname + "." + secondname + "@gmail.com";
    }
    developer.prototype.task = function () {
        return this.fullname + " develops reactJs programs";
    };
    return developer;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(firstname, secondname, topic) {
        var _this = _super.call(this, firstname, secondname) || this;
        _this.topic = topic;
        return _this;
    }
    student.prototype.task = function () {
        return this.fullname + " studies" + this.topic.map(function (subTobic) { return " " + subTobic; });
    };
    return student;
}(developer));
var person1 = new developer("Ahmed", "hassan");
var person2 = new student("Ahmed", " Ali", ["Software Engineering", "DataBases", "CyberSecurity"]);
document.getElementById("third").innerHTML = person1.task();
document.getElementById("forth").innerHTML = person2.task();
