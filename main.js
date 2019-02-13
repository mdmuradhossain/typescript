var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// First Program
console.log('Hello World');
// Variables
var myNum;
myNum = 65;
console.log(myNum);
var myString;
myString = 'This is String';
console.log(myString);
var myBool;
myBool = true;
console.log(myBool);
// Any data type can be assign
var myVar;
myVar = 87;
console.log(myVar);
// Array
var stringArr;
stringArr = ['Javascript', 'Typescript', 'Coffeescript', 'Web Assembly'];
console.log(stringArr);
var numArr;
numArr = [45, 76, 89, 90, 32];
console.log(numArr);
var anyArr;
anyArr = ['Super set of Javascript', 'ES6', 2015, true];
console.log(anyArr);
// Tuple
var strAndNumTuple;
strAndNumTuple = ['String One', 'String Two', 87, 45];
console.log(strAndNumTuple);
var myVoid;
myVoid = null;
console.log(myVoid);
var myUndefined;
myUndefined;
console.log(undefined);
console.log(typeof myUndefined);
// Functions
function getSum(numOne, numTwo) {
    return numOne + numTwo;
}
var sum = getSum(56, 87);
console.log(sum);
var multi = function (numOne, numTwo) {
    return numOne * numTwo;
};
console.log(multi(8, 4));
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName('Murad', 'Hossain'));
function myVoidMethod() {
    console.log('Not Returning anything');
}
myVoidMethod();
function showAddress(address) {
    console.log(address.city + ',' + address.state + ',' + address.country);
}
var myAddress = { city: 'Bronx', state: 'Newyork', country: 'USA' };
showAddress(myAddress);
// Classes
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.getUserInfo = function () {
        return "Name: " + this.name + ",Email: " + this.email + ", Age: " + this.age;
    };
    User.prototype.hasSubscribed = function () {
    };
    return User;
}());
var murad = new User('Murad Hossain', 'murad.hossain.cse@ulab.edu.bd', 25);
console.log(murad.getUserInfo());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.hasSubscribe = function () {
        console.log(this.name + ' has subscribed...');
    };
    return Member;
}(User));
var john = new Member(161, 'John Doe', 'john@email.com', 35);
console.log(john.getUserInfo());
john.hasSubscribe();
