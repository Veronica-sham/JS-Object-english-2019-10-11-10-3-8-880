let user = Object.create(null);
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

document.getElementById("demo").innerHTML=user.name;