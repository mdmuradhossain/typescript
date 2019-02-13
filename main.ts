// First Program
console.log('Hello World');

// Variables
let myNum: number;
myNum = 65;
console.log(myNum);

let myString: string;
myString = 'This is String';
console.log(myString);

let myBool: boolean;
myBool = true;
console.log(myBool);

// Any data type can be assign
let myVar: any;
myVar = 87;
console.log(myVar);

// Array
let stringArr: string[];
stringArr = ['Javascript', 'Typescript', 'Coffeescript', 'Web Assembly'];
console.log(stringArr);

let numArr: Array<number>;
numArr = [45, 76, 89, 90, 32];
console.log(numArr);

let anyArr: Array<any>;
anyArr = ['Super set of Javascript', 'ES6', 2015, true];
console.log(anyArr);

// Tuple
let strAndNumTuple: [string, number];
strAndNumTuple = ['String One', 'String Two', 87, 45];
console.log(strAndNumTuple);

let myVoid: void;
myVoid = null;
console.log(myVoid);

let myUndefined: undefined;
myUndefined;
console.log(undefined);
console.log(typeof myUndefined);

// Functions
function getSum(numOne: number, numTwo: number): number {
    return numOne + numTwo;
}
let sum: number = getSum(56, 87);
console.log(sum);

let multi = function (numOne: number, numTwo: number) {
    return numOne * numTwo;
}
console.log(multi(8, 4));

function getFullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}
console.log(getFullName('Murad', 'Hossain'));

function myVoidMethod(): void {
    console.log('Not Returning anything');
}
myVoidMethod();

// Interfaces
interface Address {
    city: string;
    state: string;
    country: string;
}

function showAddress(address: Address) {
    console.log(address.city + ',' + address.state + ',' + address.country);
}

let myAddress = { city: 'Bronx', state: 'Newyork', country: 'USA' };
showAddress(myAddress);


// Classes
class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getUserInfo(): any {
        return `Name: ${this.name},Email: ${this.email}, Age: ${this.age}`;
    }
    hasSubscribed(): void {

    }
}

let murad: User = new User('Murad Hossain', 'murad.hossain.cse@ulab.edu.bd', 25);
console.log(murad.getUserInfo());

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }
    hasSubscribe(): void {
        console.log(this.name + ' has subscribed...');
    }

}

let john: Member = new Member(161, 'John Doe', 'john@email.com', 35);
console.log(john.getUserInfo());
john.hasSubscribe();

interface UserInterface {
    name: string;
    email: string;
    age: number;
    getUserInfo(): any;
    hasSubscribed(): void;
}