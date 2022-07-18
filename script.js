var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};


//object to string conversion
var j1=JSON.stringify(obj1);
//var j2=JSON.stringify(obj2);

console.log(j1);

console.log(JSON.stringify(obj1)===JSON.stringify(obj2));