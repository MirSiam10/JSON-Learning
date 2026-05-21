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

const Parse = JSON.parse(jsonData);
console.log(Parse);
console.log("Name:", Parse.Name);
console.log(typeof Parse);
console.log(typeof jsonData);