var guests=["ayeza","zoya","yumna"];
guests.splice(0,0,"faraz");
guests.splice(2,0,"mahnoor");
guests.push("ali");
console.log (guests[0] + ", please come to dinner");
console.log (guests[1] + ", please come to dinner");
console.log (guests[2] + ", please come to dinner");
console.log (guests[3] + ", please come to dinner");
console.log (guests[4] + ", please come to dinner");
console.log (guests[5] + ", please come to dinner");
console.log(guests+" I found a bigger dinner table");
console.log("I can invite only two people for dinner.");
console.log(guests[5] +" sorry u are not invited");
guests.pop();
console.log(guests[0] +" sorry u are not invited");
guests.shift();
console.log(guests[3] +" sorry u are not invited");
guests.pop()
console.log(guests[2] +" sorry u are not invited");
guests.pop()
console.log( guests+ " you are invited")
guests.splice(0,2);
console.log(guests);





