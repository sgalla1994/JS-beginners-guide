//To run on terminal in Visual Studio Code and run webpacker by running terminal command "npm run dev"
//!!!! Some solutions may be commented out due to duplicate variables please uncomment if you wish to run them !!!!
//

console.log("constants: ");

//Constants are variables which cannot be changed these stop developers from making mistakes when developing apps
    const carId = 100;
    console.log(carId);

console.log("");
console.log("Let/Var for Variable Declarations: ");

//Let and var for variable declarations
//Var also lets you declare a variable within a block and you can log it from outside the block - var has block scoping and var does not
    let carId1 = 42;
    console.log(carId1);


    var carId2;


//Cannot do this with let variable - block scoping
    if (true) {
        var carId2 = 100;
    }
    console.log(carId2);

console.log("");
console.log("Rest Parameters: ");

//Rest parameters
//Rest parameter must be last parameter in function
    function sendCars(day, ...allCarIds) {
        allCarIds.forEach ( id => console.log(id));
    }
    sendCars ('Sunday', 100, 200, 555);

console.log("");
console.log("Destructuring Arrays: ");

//Destructuring Arrays
//This allows you to take the data from an array and assign them to variables
    let carIds = [1, 2, 5]; //basic array structure
    let [car1, car2, car3] = carIds; //destructured array
    console.log(car1, car2, car3);


    let carIds2 = [1, 2, 5];
    let cars, remainingCars;
    [cars, ...remainingCars] = carIds; //we can also not put the cars variable in that will simply skip over the first item in the array eg. '[, ...remainingCars] = carIds;
    console.log(car1, remainingCars);

console.log("");
console.log("Destructuring Objects: ");

//Destructuring Objects 
//This allows you to take the data from an object and assign it to variables
//NOTE: destructuring objects always uses curly braces as opposed to destructuring arrays which uses square braces 
    let car = {id: 4998, style: 'Hatchback'};
    let {id, style} = car;
    console.log(id, style);


    // let car = {id:5122, style: 'Saloon'};
    // let id, style;
    // ({id, style} = car);
    // console.log(id, style);

console.log("");
console.log("Spread Syntax: ");

//Spread Syntax
// A rest parameter collects data and stores it into an array but spread syntax takes the array and spreads it into parameters - spread syntax is opposite of rest parameters
    function startCars(carporsche, caraudi, carvw) {
        console.log(carporsche, caraudi, carvw);
    }

    let carsMake = ["porsche", "audi", "volkswagen"];
    startCars(...carsMake);


    //JS allows iterables meaning we can provide one string and break it up into three parameters
    //
    // function startCars(car4, car5, car6) {
    //     console.log(car4, car5, car6);
    // }

    // let carsCodes = ['abc'];
    // startCars(...carsCodes);


    //Even though rest and spread syntax are opposite to each other they can also be used together as shown below
    //
    // function startCars(car7, car8, car9 , ...rest) {
    //     console.log(rest);
    // }

    // let carIds3 = [1, 2, 3, 4, 5, 6];
    // startCars(...carIds3);

console.log("");
console.log("Typeof(): ");

//typeof()
    typeof(1); //number
    typeof(true); //boolean
    typeof('Hello'); //string
    typeof(function(){}); //function
    typeof({}); //object
    typeof(null); //object
    typeof(undefined); //undefined
    typeof(NaN); //number

console.log("");
console.log("Common Type Conversions: ");

//Common Type Coversions
    let foo = 1;
    foo.toString(); //convert to string  - look at JS documentation for more info
    Number.parseInt('55'); //55 as a number 
    Number.parseFloat('55.99'); //55.99 as a number 

//Controlling Loops
    let i = 0; // we provide initialisation before the loop
    for (; i < 12; i++) { //at this stage we are not required to provide an initialisation although we do have to leave the semi colon in place at start
        if (i === 8) {
            break; // break allows you to stop the statment before the end of the loop
        }
    }
    console.log(i);
    

    for (let i = 0; i < 4; i++) {
        if (i === 2) {
            continue; // this statement skips any further code and continues the for loop therefore in output 2 is not displayed in console
        }
        console.log(i);
    }

console.log("");
console.log("Equality Operators: ");

//Equality Operators
    let var1 = 1;
    let var2 = 2;
    if (var1 == var2) {} //JS would try to convert var1 and var2 to be the same type
    if (var1 === var2) {} //This will not do the type conversion - instead the type and value needs to be the same for it to be true
    if (var1 != var2) {} //both variables are not equal too - this attempts type conversion
    if (var1 !== var2) {} // not double equal too - no type conversion

console.log("");
console.log("Unary Operators: ");

//Unary Operators
//this works as a single operator 
    let number = 5;
    number = ++number; //number would equal 6 - the ++ can also come after the name eg. number++
    number = --number; //number would equal 4 - the -- can also come after the name eg. number--
    number = +number; //can convert a string into a numeric type
    number = -number; //changes the sign of a variable eg. -5 would become 5

    
    let year = 1994;
    console.log(year++);
    console.log(year);


    let years = 1994;
    console.log(years--);
    console.log(years);


    let birthDate = "1994";
    console.log(typeof(birthDate));
    console.log(typeof (+birthDate));


    let birthDates = -1994;
    console.log(birthDates);
    console.log(-birthDates);

console.log("");
console.log("Logical (boolean) Operators: ");

//Logical (Boolean) Operators
    let var3 = 5;
    if (var1 > 5 && var2 < 100) {} //for this to be true both statements must be true - the code block will only execute in this instance
    if (var1 > 5 || var2 < 100) {} //the or symbol means only one of these conditions needs to be true for the code block to execute
    if ((var1 > 5 || var2 < 100) && var3 === 5) {} //using both operators in one statements - the brackets are required as the and (===) operator takes precedence over the or (||) operator 
    var1 && var2; //the result with be var2 if both are truthy
    var1 || var2; // if var1 is truth the result will be var1 but if var1 is undefined or not truthy the result will be var2 
    !var1; //if var1 is truthy then the ! symbol will make it false


    if (5 === 5 && 6 == 6) {
        console.log(true);
    } else {
        console.log(false);
    }


    if (5 === 5 || 7 === 4) {
        console.log(true);
    } else {
        console.log(false);
    }


    if ((5 < 10 || 6 < 4) && 3 === 3) {
        console.log(true);
    } else {
        console.log(false);
    }


    let userSettings = null;
    let defaultSettings = { name: 'Default'};
    console.log(userSettings || defaultSettings);


    console.log(!true);
    console.log(!false);


    let cards = null;
    if (!cards) {
        cards = "Ace Of Spades";
    } else {
        console.log(cards);
    }
    console.log(cards);

console.log("");
console.log("Relational Operators: ");

//Relational Operators
//these are >, <, >=, <=
//these operators take into account ASCII Values go to www.asciitable.con
    "Zoo" < "alphabet"; //this would equal false due to ASCII and uppercase letters are rated higher than lowercase


    let s1 = 'Zoo';
    let s2 = 'alphabet';

    if (s1.toUpperCase() < s2.toUpperCase()) { //in this situation we can use toUpperCase() or equally toLowerCase() to make both strings the same format
        console.log(true);
    } else {
        console.log(false);
    }

console.log("");
console.log("Conditional Operator: ");

//Conditional Operator
//this operator can be used in place of an if statement 
    var result = (foo > 5) ? true : false; // this statement starts with a conditional the parenthesis are optional, the ? appears and then true or false is added


    console.log((5 > 4) ? 'yes' : 'no');
    console.log((5 > 4 && 10 === 10) ? 'yes' : 'no');
    console.log(6 < 3 || 6 === 5 ? 'yes' : 'no');

console.log("");
console.log("Assignment Operators");

//Assignment Operators
    let varassignmentplus = 10;

    varassignmentplus += 10; //this statment equals to var1 = var + 10  
    console.log(varassignmentplus); 


    let varassignmentminus = varassignmentplus;

    varassignmentminus -= 5;
    console.log(varassignmentminus);

    
    let varassignmentdiv = varassignmentminus;

    varassignmentdiv /= 2;
    console.log(varassignmentdiv);


    let varassignmentmulti = varassignmentdiv;

    varassignmentmulti *= 10;
    console.log(varassignmentmulti);


    let varassignmentremainder = varassignmentmulti;

    varassignmentremainder %= 7;
    console.log(varassignmentremainder);


    //Advanced operators include >>= and <<=
    let varrightbit = varassignmentremainder;

    varrightbit >>= 1;
    console.log(varrightbit);

    let varleftbit = varrightbit;

    varleftbit <<= 1;
    console.log(varleftbit);

console.log("");
console.log("Operator Precendence: ");

    //Operator Precedence
    console.log("Go view   developer.mozilla.org/en-US/Web/JavaScript/Reference/Operators/Operator_Precendence#Table");

console.log("");
console.log("Function Scope: ");

    //Function Scope
    //NOTE: if a child function uses the same variable name as its parent function... the variable is legal although upon logging to console it will be out of scope and parent functions variable will be shown
    function startingCar(cars1) {
        let message = 'Started'; //this variable can only be accessed from within function startingCar
        let startFn = function turnKey() {
            console.log(message); //even though this variable isn't in this nested function it is valid because a child function can get variables from its parent
            console.log(cars1); //child function can gather parameters from parent function 
        };
        startFn();
    }

    startingCar("VROOOOM! VROOOOM!");

console.log("");
console.log("Block Scope: ");

    //Block Scope
    //a code block that is placed between {}
    //NOTE: you can have two variables of the same name depending on code blocks - you can have a variable in parentheses calles 'name' and another variable called 'name' as a global variable
    //NOTE: in block code the block scope will ONLY work with let variables
    if (5 === 5) {
        let message = 'Equal'; //this variable will only be available within this block of code - eg. if we call this variable from outside these parentheses then it is out of scope
    }


    const name = 'Shaminder';
    if ('first' === 'first') {
        let name = 'Sham';
        console.log(name);
    }
    console.log(name);

console.log("");
console.log("IIFE Pattern: ");

    //IIFE Pattern
    //Immediately Invoked Function Expression - a function expression is when you take a function and assign it to a variable then invoking it immediately after assigning
    let app = (function() {
        let iife1 = 123;
        console.log('in function');
        return { };
    })();


    let appIifeId = (function () {
        let iifeId = "iife pattern";
        console.log('IIFE FUNCTIONS ARE EASY!');
        return {};
    })();
    console.log(appIifeId);

console.log("");
console.log("Closures: ");

    //Closures
    let app1 = (function() {
        let variable1 = 123;
        let variable2 = function() {
            return variable1;
        };
        return {
            variable2: variable2
        };
    })();
    console.log(app1.variable2());

console.log("");
console.log("The This Keyword: ");

    //The This Keyword
    //this refers to the object context
    //read further documentation on 'this' keyword - can be confusing
    let fn = function () {
        console.log (this === window);
    };

    fn();


    let o = {
        oo1: 123,
        oogetId: function () {
            console.log(this);
            return this.oo1;
        }
    };
    console.log(o.oogetId());

console.log("");
console.log("Call and Apply: ");

    //Call and Apply
    //this allow you to take a function and change its context by applying new variables outside of the scope to the function
    let o1 = {
        oo2: 123,
        oogetId1: function() {
            return this.oo2;
        }
    };

    let newCar = {oo2: 456};
    console.log(o1.oogetId1.call(newCar));  //here you can see we are using the .call function to call the new variable to the o1 function


    let o2 = {
        oo3: 123,
        oogetId2: function(prefix) {
            return prefix + this.oo3;
        }
    };

    let newCar1 = {oo3: 456};
    console.log(o2.oogetId2.apply(newCar1, ['ID: ']));  //here you can see we are using the .apply function to call the new information to the o1 function

console.log("");
console.log("Bind: ");

    //Bind
    //bind is assigned to a function it then makes a copy of that function and assigns a new context to it - it is then accessed by using the 'this' keyword
    let o3 = {
        oocarId: 123,
        oogetId: function() {
            return this.oocarId;
        }
    };

    let newCar2 = {oocarId: 122};
    let newFn = o3.oogetId.bind(newCar2);
    console.log(newFn());  //here you can see we are using the .apply function to call the new information to the o1 function

console.log("");
console.log("Arrow Functions: ");

    //Arrow Functions
    //NOTE: if an arrow function has two or more parameters then these need to be declared inside parentheses
    //NOTE: arrow functions do not have their own 'this' value
    let getId = () => 123; //the arrow function comes in between the parameter and the value of the parameter
    console.log(getId());


    let getId1 = (prefix, suffix) => prefix + "world" + suffix;
    console.log(getId1('Hello ', '!'));


    //we can also use the first layout to do this as we only have a return function
    let getId2 = (prefix, middle, suffix) => {
        return prefix + middle + suffix;
    };
    console.log(getId2('@', '2547861', 'SG'));

console.log("");
console.log("Default Parameters: ");

    //Default Parameters
    //this allows you to set a default in the parameters when creating a function - this means if you do not give a value when you call for the function it will use the default one instead
    let trackCar = function(carIdentity, city='London') {
        console.log(`Tracking ${carIdentity} in ${city}.`); //we use interpolation here to log a sentence mixed with parameters from the function 
    };
    console.log(trackCar("DK64 VOU, Ford Fiesta 1.0L Ecoboost Titanium, Blue"));
    console.log(trackCar("DF12 RXO, Audi A1 1.4L Sportback, Silver", "Birmingham"));

console.log("");
console.log("Constructor Functions: ");

    //Constructor Function
    //this function is used to instatiate new object but behaves very differently from other regular functions
    function Car(numbers) {
        this.numbers1 = numbers;    //in constructor functions the data from the new function is stored in the 'this' keyword
    }
    let carNew = new Car("VI1453062232"); //this will create a new Car() function and assign it to the carNew variable
    console.log(carNew.numbers1);


    //Constructor Function - Method 
    //NOTE: properties and methods should LALWAYS be stored on the 'this' keyword - if this is not done you will recieve "identity1 is not defined" error
    function Car1(identity) {
        this.identity1 = identity;
        this.start = function () {
            console.log('start: ' + this.identity1);
        };
    }
    let caridentity1 = new Car1("UI1335464236");
    caridentity1.start();

console.log("");
console.log("Prototype: ");

    //Prototype
    //NOTE: a prototype exists directly on the function itself - we can use a prototype as it is more efficient if you create a object in a function it creates the new function each whereas in prototype it creates as many object as you like on one function
    //NOTE: we still have to reference the objects 'this' keyword
    function Car2(identity1) {
        this.identity2 = identity1;
        this.start = function () {
            console.log('start: ' + this.identity2);
        };
    }
    let caridentity2 = new Car2("VIN11133429683");
    caridentity2.start();

console.log("");
console.log("Expanding Objects Using Prototype: ");

    //Expanding Objects Using Prototypes
    //we can also use prototypes to expand objects
    
    //String.prototype
    //NOTE: remember all information is stored in the 'this' keyword
    String.prototype.hello = function() {
        return this.toString() + ' Hello';
    };

    console.log('Shaminder'.hello());

console.log("");
console.log("JSON:");

    //JSON - Javascript Object Notation
    //this is a way to send information via a wire - in most cases though it is used to send information across an API such as a REST API

    //Convert to JSON
    let carJson = {
        identification: 123,
        stylist: 'Shaminder' 
    };

    console.log(JSON.stringify(carJson)); //we use 'JSON.stringify() to convert the information from carJson variable into a JSON string


    //Convert Array To JSON
    let carVin = [
        {carVin: 12345},
        {carVin: 6789},
        {carVin: 123}
    ];

    console.log(JSON.stringify(carVin));


    //Parsing JSON
    let jsonIn = 
    `[
        {"carVins" : 123},
        {"carVins" : 456},
        {"carVins" : 789}
    ]`;
    let carVins = JSON.parse(jsonIn);
    console.log(carVins);


    let jsonIn2 = 
    `[
        {"name": "Shaminder"},
        {"name": "Singh"},
        {"name": "Galla"}
    ]`;
    let jsonInName = JSON.parse(jsonIn2);
    console.log(jsonInName);

console.log("");
console.log("Array Iteration: ");

    //Array Iteration
    let collegeIds = [
        {collegeId: 12345, style: 'card'},
        {collegeId: 6789, style: 'card'},
        {collegeId: 1357, style: 'paper'}
    ];

    collegeIds.forEach(college => console.log(college));


    //Array Filtering 
    let collegeFiltering = collegeIds.filter(
        college => college.style === 'card'
    );
    console.log(collegeFiltering);


    //Array Testing
    let result1 = collegeIds.every(
        college => college.collegeId > 0
    );
    console.log(result1);


    //Locate the first match
    //this is to find the first match of something in a array 
    let collegeFind = collegeIds.find(
        college => college.collegeId > 12340
    );
    console.log(collegeFind);


console.log("");
console.log("Class Basics: ");

        //Class Basics 
       // these give us a new syntax in order to make constructor functions and modules are a way to organise code
       class Basics {

       }
       let basics1 = new Basics();
       console.log(basics1);


       //Constructors And Properties 
       //NOTE: a constructor is a function that gets executed when a new instance of an object gets created 
       //NOTE: constructors here are similar to constructors from constructor functions but this is in context to constructors of the classes not the function
       function Car11(numbers) {
        this.numbers1 = numbers;    //in constructor functions the data from the new function is stored in the 'this' keyword
        }
        let carNew1 = new Car11("VI1453062232"); //this will create a new Car() function and assign it to the carNew variable
        carNew1.numbers1 = "33554256633";
        console.log(carNew1.numbers1);


        //Methods 
        class Cars11{
        constructor(numbers) {
            this.numbers = numbers;    //in constructor functions the data from the new function is stored in the 'this' keyword
            }
            identify(suffix) {
                return `Car Id: ${this.numbers} ${suffix}`;
            }
        }
            let carNew12 = new Cars11("VI1453062232"); //this will create a new Car() function and assign it to the carNew variable
            console.log(carNew12.identify('!!!'));

console.log("");
console.log("Inheritance: ");

        //Inheritance
        //this makes it easier so you can relate all items to one class if necessaryw
        class Vehicle {
            constructor() {
                this.type = 'car';
            }
            start() {
                return `Starting: ${this.type}`;
            }
        }

        //you can also return the value car without creating a start function inside Carss and instead leaving the parenthesis blank with only using the 'extends Vehicle'
        class Carss extends Vehicle {
            start() {  
                return 'in Car start ' + super.start();
            }
        }

        let carsVeh = new Carss();
        console.log(carsVeh.start());

console.log('');
console.log('Creating a Module & Importing a Module: ');

        //Creating a Module & Importing a Module
        //this is how we can keep our code neat and tidy when working with JS 
        //find models in src -> scripts -> models -> .
        import {Carss1} from './models/cars.js';
        let carModule = new Carss1(123);
        console.log(carModule.id);

console.log('');
console.log('Programming the BOM and DOM: ');

        //Programming the BOM and DOM
        console.log('BOM = Browser Object Model - this lets you add functionality in the browser');
        console.log('DOM = Document Object Model - this lets you make changes to the webpages');

        //The Window Object 
        //window is the global object in JS and can be accessed from anywhere 
         
        //window contains a number of items these are listed below:-
        //***PROPERTIES***
        //document - this is our DOM
        //location - gives us details on browser location
        //console - the console we are using right now to view all our functions and objects etc. 
        //innerheight - gain dimensions of screen height that webpage is on
        //innerwidth - gain dimensions of screen width that webpage is on
        //pageXOffset - gain information where scrollbars are positioned
        //pageYOffset - gain information where scrollbars are positioned
        //
        //***METHODS***
        //alert() - show alert dialog on page
        //back() - go back in browser history from page 
        //confirm() - also shows dialog similar to alert() - will give the user a yes/no choice
        //
        //***EVENTS***
        //(not common) - lookup on MDN (Mozilla Devleoper Network - https://developer.mozilla.org)
        

        //Timers 
        //these run asynchronously to allow smooth browsing 
        //timeoutId - this fires once and then stops
        //intervalId - this fires repeatedly so clearInterval will need to be used to make it stop 
        let timeoutId = setTimeout( function() {
            console.log('1 second passed');
        }, 1000);

        clearTimeout(timeoutId);

        let intervalId = setInterval( function() { 
            console.log('1 second passed');
        }, 1000);

        clearInterval(intervalId);


        //The Location Object
        //this object is apart of the BOM
        //***PROPERTIES***
        //href - URL we are pointing too 
        //hostname
        //port
        //patchname
        //search
        //
        //***METHODS***
        //assign()
        //reload()
        //
        //***EVENTS***
        //(not common)

        console.log(document.location.href); //we can access location from either the DOM as shown in this example or simply using the global variable window (location.href)
        console.log(location.href);
        console.log(document.location.port);
        console.log(location.port);


        //The Document Object
        //***PROPERTIES***
        //body
        //forms
        //links
        //
        //***METHODS***/
        //createElement()
        //createEvent()
        //getElementById()
        //getElementsByClassName()
        //
        //***EVENTS***/
        //onload
        //onclick
        //onkeypress


        //Selecting DOM Elements
        //visit MDN for more methods on how to access elements from within the DOM
        document.getElementById('elementId'); //retrieve element by it's ID
        document.getElementsByClassName('className'); //retrieve an array of classes or single class if only one
        document.getElementsByTagName('tagName'); //retrieve all elements of a specific tag name for eg(p, h1, h2, h3, a and img)

        let el = document.getElementById('first');
        console.log(el);

        let els = document.getElementsByClassName('p1');
        console.log(els);
        console.log(els[0]);
        console.log(els[1]);

        let elsTag = document.getElementsByTagName('p');
        console.log(elsTag[0]);
        console.log(elsTag[1]);
        console.log(elsTag[2]);
        

        //Modifying DOM Elements
        //please view the concept coded below
        //
        // let elementExample = document.getElementById('elementId');
        // element.textContent = 'new text here';
        // element.setAttribute('name', 'nameValue');
        // element.classList.add('myClassName');
        // element.style.colour = 'blue';

        let elementFirst = document.getElementById('first');
        elementFirst.textContent = "New content coming soon...!";
        elementFirst.classList.add("test");
        elementFirst.style.color = "indianred";

        console.log(elementFirst);

console.log("");
console.log("Promises and Error Handling: ");

        //Errors Handling Using Try and Catch Optional Finally
        try {
            let car = newCars;
        }
        catch(error) {
            console.log('error: ', error);
        }
        finally {
            console.log('please view your errors from the executed script above... if any');
        }


        //Developer Defined Errors
        try {
            throw new Error('developer defined error - custom');
        }
        catch(error) {
            console.log('error: ', error);
        }
        finally {
            console.log('please view your errors from the executed script above... if any');
        }


        //Creating a Promise 
        let promise = new Promise(
            function(resolve, reject) {
                setTimeout(resolve, 100, 'someValue');
            }
        );

        console.log(promise);


        //Setting a Promise
        //when working with promises we almost always have to provide the .then function and pass is fulfilled and rejected values - although some third party apps or frameworks have this feature built in 
        let promiseSet = new Promise(
            function(resolve, reject) {
                setTimeout(resolve, 100, 'someValue');
            }
        );
        promiseSet.then(
            value => console.log('fulfilled: ' + value),
            error => console.log('rejected: ' + error)
        );

console.log("");
console.log("Data Access Using HTTP: ");

        //HTTP Requests Using XHR
        //XHR - XAML HTTP REQUESTS
        //it can be difficult to use XHR due to the necessity to know underlying protocols to understand readystates
        //mockapi.io is a good website to use for adding data and using that data to test api requests
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", "https://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", true);
        xhttp.send();


        //HTTP Requests Using jQuery
        //
        // import $ from 'jquery';
        // $.get("https://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users",
        //     data => console.log('data: ', data)
        // ); //although this method works it is not the best possible way to make use of the get function we can use the query below instead


        import $ from 'jquery';

        let promises1 = $.get("https://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users");
        promises1.then(
            data => console.log('success: ', data),
            error => console.log('error: ', error)
        );


        //HTTP POST Using jQuery
        //we have already imported $ from jquery
        let user = {
            name: 'Mark Zamoyta',
            avatar: 'mark.jpg'
        };
        let promisePost = $.post(
            "http://myid.mockapi.io/api/v1/users", user
        );
        promisePost.then(
            data => console.log('data: ', data),
            error => console.log('error: ', error)
        );

console.log("");
console.log("Forms: ");

        //Preventing Form Submissions & Accessing Form Fields & Showing Validation Errors
        // let form = document.getElementById('user-form');

        // form.addEventListener('submit', event => {
        //     let user = form.elements['user'];
        //     let avatarFile = form.elements['avatar-file'];

        //     console.log(user.value, avatarFile.value);
        //     event.preventDefault();
        // });

        let form = document.getElementsById('user-form');

        form.addEventListener('submit', event => {
        let user = form. elements ['user'];
        let userError = document.ElementGetById('user-error');

        if (user.value.length < 4) {
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.style.bordercolor = 'red';
        user.focus();

        event.preventDefault();
        }
        });


        //Posting From Javascript
        //bypass form post to post object literal 

        let form1 = document.getElementById('user-form');
        
        form.addEventListener('submit', event => {
            let user = form1.elements['user'];
            let avatarFile = form1.elements['avatar-file'];

            let posting = {
                user: user.value,
                avatarFile: avatarFile.value
            };

            let promise = $.post(
                "https://5ba4a66d328ae60014f3059d.mockapi.io/", posting
            );
            promise.then(
                data => console.log('success: ', data),
                error => console.log('error: ', error)
            );
            event.preventDefault();
        });