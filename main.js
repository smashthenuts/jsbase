/*
//----------------------------------------------------------------------------------------------------------------
//DECLARING A VARIABLE

let a = 'hello';
//Using let keyword to declare a variable
console.log(a);
//Difference between let and var keyword
function varFunc() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log('Finally i : ' + i);
}
varFunc();
//While using var keyword, it is available even outside it's scope. var keyword is associated to nearest function.

function letFunc() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log('Finally  : i ' + i);
}
letFunc();

//While using let keyword, it is closely associated to nearest block. That's why it shows compilation error.

//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
//DATA TYPES

//Strong typing is one good feature of TypeScript. This avoids type mutations.
var a;
a = 'hello';
a = 1;
console.log(a);

//Here var a is assigned with a string. later it is assigned with a number. This is totally bad and zero compilation errors. This is what we call data mutation. In TS, to avoid this bug, we have strong typing. i.e, Data Annotation

let b: number;
b = 'hello';
console.log(b);

//Here, after annotating it to a number type, later it can't be assigned with a string. Compilation error occurs. But it is still totally legal in JS.

let c: number;
let d: string;
let e: boolean;
let f: any;
let g: number[];
let h: string[];
let i: any[];
i = ['he', 'she', true, 47];

enum Numbers {
    value1 = 0, value2 = 2, value3 = 57
}
console.log('Number chosen is : ' + Numbers.value1);

//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
// TYPE ASSERTIONS

//type assertions are purely to access the intellisense

let word;
word = 'ab';
if ((<string>word).endsWith('a')) {
    console.log('It\'s ab');
} else if ((word as string).endsWith('b')) {
    console.log('it is b');
}

//These kinda assertions doesn't alter the allocated memory for that variable.
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------

//ARROW FUNCTIONS

//Normal Callback Function

function funName() {
    console.log('this is one kinda function');

}

funName();

let funName2 = function () {
    console.log('another way to write a function');

}

funName2();
//This is how we write call back functions is JS. Now in type script, there are better ways to write this functions

//A function with arrow sign and eliminating 'function' keyword

let funName3 = () => {
    console.log('Type 1 function declaration in typescript');
}
funName3();

//A function with a parameter

let funName4 = (message) => {
    console.log(message);
}
funName4('Aadir Suresh');

//If a function has only a single line of operation, then we can eliminate teh curly braces

let funName5 = () => console.log('Function with a single line of operation');

funName5();

//If a function has a single parameter, we can avoid wrappping the parameter with the brace

let funName6 = mess => {
    console.log(mess);
}

funName6('Aneesha Suresh');

//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------

//INTERFACES

let interfaceFun = (x, y, z) => {
    console.log(x);
    console.log(y);
    console.log(z);
}
interfaceFun(1, 2, 3);
//What if a function has to do operation with n number of parameteres. This is where we pass objects instead of passing multiple parameters. This keeps the code clean.

let tryObj = {
    a: 1,
    b: 2,
    c: 'Suresh Subramaniam',
    d: true
};

let interfaceFun2 = (obj: { a: number, b: number, c: string, d: boolean }) => {
    console.log(obj.a);
    console.log(obj.b);
    console.log(obj.c);
    console.log(obj.d);
}
interfaceFun2(tryObj);


let drawPo = (draw: { x: string, y: string }) => {
    console.log(draw.x);
    console.log(draw.y);
}
drawPo({ x: 'hello', y: 'hai' })

//Even this methodology looks verbose.  Even better approach is to have an interface

interface PersonObj {
    name: string,
    age: number,
    sex: string,
    marriedStatus: boolean
}

let showDetails = (dets: PersonObj) => {
    console.log(dets.name);
    console.log(dets.sex);
    console.log(dets.age);
    console.log(dets.marriedStatus);
}
showDetails({ name: 'Suresh', age: 27, sex: 'male', marriedStatus: true });


//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------

//CLASSES & OBJECTS

class NewCLass {
    x: number;
    y: number;
    z: number;

    addNumbers = (point: NewCLass) => {
        console.log(this.x + this.y);
    }
    subNumbers = () => {
        console.log(this.x - this.y);
    }
}

//let values1: NewCLass;
//This is a special type, we are not dealing with number or string or boolean kinda type. Here it is purely custom type. In custom types we need to allocate memory manually using ne wkey word.
let values = new NewCLass();

values.x = 10;
//values1.x = 40;
values.y = 20;
//values1.y = 50;

values.addNumbers(values);
//Here we pass the object itself
values.subNumbers();
//By default all the properties inside a class are accessible to all the methods inside the class. So it is not necessary to pass the object as parameter
console.log(values);

//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
//CONSTRUCTOR

class conClass {
    age: number;
    name: string;
    eligibility: boolean;

    constructor(age?: number, name?: string, eligibility?: boolean) {
        this.age = age;
        this.name = name;
        this.eligibility = eligibility;
    }
    isEligible = (age) => {
        if (this.age > 18) {
            return this.eligibility = true;
        }

    }
}

let ageValue = new conClass(23,'Suresh',false);
// ageValue.age = 23;
// ageValue.name = 'Suresh';
let result = ageValue.isEligible(ageValue.age);
console.log(result);
//console.log(ageValue.eligibility);

//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
//ACCESS MODIFIERS IN CONSTRUCTORS

class accModCons {
    constructor(private x?: number, private y?: number) {
//Using ? symbol after the argument name indicates that the field is optional(Like default constructor- no arguments).
//appending Access Modifiers before the argument name will generate a field in the same name of the arguement and initialize the field as well.
    }

    doMath = () => {
        return this.x + this.y;
    }
    putX(x) {
        this.x = x;
    }
    putY(y){
        this.y = y;
    }
}
let vals = new accModCons(1, 2);
vals.putX(2);
vals.putY(5);
console.log(vals.doMath());

//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------

//GETters and SETters

class GetClass {

    constructor(private _name?: string, private age?: number) {

    }
    get name() {
        return this._name;
    }
    set name(name:string) {
        this._name = name;
    }
}
let ob = new GetClass();
ob.name = 'hello';
//It's actually a method but acts like a property(objects)
console.log(ob.name);


//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
//Exercise solution

class FbLikes {
    constructor(private _likesCount: number, private _isLiked: boolean) {

    }

    onClick = () => {
        this._likesCount += (this.isLiked) ? -1 : 1;
        this._isLiked = !this._isLiked;
    }

    get LikesCount() {
        return this._likesCount;
    }
    get isLiked() {
        return this._isLiked;
    }
}

let lik = new FbLikes(5, false);
lik.onClick();
console.log(`Likes Count : ${lik.LikesCount} , Likes Status  : ${lik.isLiked}`);

//----------------------------------------------------------------------------------------------------------------

*/
//----------------------------------------------------------------------------------------------------------------
var madKing = /** @class */ (function () {
    function madKing(dupe, original) {
        var _this = this;
        this.dupe = dupe;
        this.original = original;
        this.checkOriginality = function (statRece) {
            return statRece ? _this.dupe = statRece : _this.original = statRece;
        };
    }
    Object.defineProperty(madKing.prototype, "X", {
        get: function () {
            return this.dupe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(madKing.prototype, "Y", {
        get: function () {
            return this.original;
        },
        enumerable: true,
        configurable: true
    });
    return madKing;
}());
var statQue = new madKing();
statQue.checkOriginality(true);
console.log('status of duplicate is : ' + statQue.X);
console.log('status of Original is : ' + statQue.Y);
