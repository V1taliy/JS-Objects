/////////task 1
var user = {};
user.name = "Vasiliy";
user.surname = "Prohorov";
user.age = 25;
user.phones = {
    "+7": "Russia",
    "+38": "Ukraine",
    "+1": "Usa"
} 
user.name = "Sergey";
delete user.surname;


///////////////task 2
for(var key in user) {
     alert("User " + "KEY: " + key + " VALUE: " + user[key] )
    }
if(typeof(user[key] == 'object')) {
        for(var code in user.phones) {
           var value = user.phones[code]; 
           alert(code + ": " + value);
        }
    }

    //////////////task 3
    /*var student = {};
    for (key in user) {
        student[key] = user[key];
    }
    console.log(student)*/
    /////////
   /* var student = {};
    student = Object.keys(user);
    console.log(student);
    */
    var student = {};
var olo = Object.assign(student, user);
//console.log(olo);

student.name = "Tom";
//console.log(user);
//console.log(student);

////////////task 4
user.isHiddenTalent = "Dance";

student = JSON.parse(JSON.stringify(user));


//console.log(user);
//console.log(student);

///////////////task 5
user.bbf = "OLOLO";
Object.defineProperty(user, 'country', {
    value : "Kiev"
});
console.log(user.country);

//////////task 6
 var user = {
    name :  "Sergey",
    age : 25,
    
    toString: function() { return "His name is " + this.name },
    valueOf: function() { return this.age; },
 };
 alert(user);
 alert(user.age * 2);

