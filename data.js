console.log("Data file loaded");

const jsonData = `{
"Name": "Mir Siam",
"Age": 25,
"Skills": ["JavaScript", "Python", "C++"],
"Address" : {
    "Street": "123 Main St",
    "City": "Anytown",
    "Country": "USA"
}
}`;

console.log("JSON data as string:", jsonData);

//Parse the JSON string into a JavaScript object
const Parse = JSON.parse(jsonData);
console.log(Parse);
console.log("Name:", Parse.Name);
console.log(typeof Parse);
console.log(typeof jsonData);

//Stringify the JavaScript object back into a JSON string

const JSdata = {
    Name: "Mir Siam",
    Address: {
        Street: "123 Main St",
        City: "Anytown",
        Country: "USA"
    }
};

const JSONString = JSON.stringify(JSdata);
console.log("JSONString:", JSONString);
