//property and description
//constructor--returns a reference of string functions the created object
var str = new String("This is string");
console.log("str.constructor is:" + str.constructor);

//length--return length of string
var uname = new String("Hello World");
console.log(uname);
console.log("Length " + uname.length);

//The prototype property allows to add properties and methods to an object.
function employee(id: number, name: string) {
  this.id = id;
  this.name = name;
}
var emp = new employee(1000, "MyName");
employee.prototype.email = "myName@email.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);

//string methods
//charAt()--returns char from specified index
//charCodeAt() -- Returns a number indicating the Unicode value of the character at the given index.
var str = new String("This is string");
for (let i = 0; i <= str.length; i++) {
  console.log(
    "str.charAt" +
      i +
      " is:" +
      str.charAt(i - 1) +
      "str.charCodeAt" +
      i +
      "is:" +
      str.charCodeAt(i - 1)
  );
}

//concat --Combines the text of two strings and returns a new string
//indexOf --Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
var str1 = new String("This is string one");
var str2 = new String("This is string two");
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : " + str3);
var index = str1.indexOf("string");
console.log("indexOf found String :" + index);

//lastIndexOf--Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
var str1 = new String("This is string one and again string");
var index = str1.lastIndexOf("string");
console.log("lastIndexOf found String :" + index);

index = str2.lastIndexOf("one");
console.log("lastIndexOf found String :" + index);

//localeCompare--Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
var index = str1.localeCompare("This is string one and again string");
console.log("localeCompare first :" + index); 
//return 0 If the string matches 100%.

var index = str1.localeCompare("This is beautiful string");
console.log("localeCompare first :" + index); 
// return 1 no match, and the parameter value comes before the string object's value in the locale sort order.

//slice()--Extracts a section of a string and returns a new string.
var sliceString = "Slice String here";
var sliced = sliceString.slice(3, -3);
console.log(sliced);


//split()--Splits a String object into an array of strings by separating the string into substrings.
var splitString = "Apples are round, and apples are juicy."; 
var splitted = splitString.split(""); 
console.log(splitted);
var splitted = splitString.split(" "); 
console.log(splitted);
var splitted = splitString.split("",3); 
console.log(splitted);
var splitted = splitString.split(" ",3); 
console.log(splitted);


//substr() --Returns the characters in a string beginning at the specified location through the specified number of characters.
//substring()--// Returns the characters in a string between two indexes into the string.
var subStr = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + subStr.substr(1,2)); 
console.log("(-2,2): "   + subStr.substr(-2,2)); 
console.log("(1): "      + subStr.substr(1)); 
console.log("(-20, 2): " + subStr.substr(-20,2)); 
console.log("(20, 2): "  + subStr.substr(20,2));
console.log("(1,2): "    + str.substring(1,2)); 
console.log("(0,10): "   + str.substring(0, 10)); 
console.log("(5): "      + str.substring(5));

//toLowerCase( ) ,toUpperCase( ), toString()
var caseString = "Apples are round, and Apples are Juicy."; 
console.log(caseString.toLowerCase( ));
console.log(caseString.toUpperCase( ));
console.log(caseString.toString( ));
console.log(caseString.valueOf( ));//returns primitive value of string








