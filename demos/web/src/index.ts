import {User} from "./models/User";

console.log('hi there');

const user = new User({name: 'mooki', age: 32});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: "newName", age: 999});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: "Mooki"});

console.log(user.get('name'));

user.on('change', () => {

});
user.on('change', () => {

});
user.on('otherEvent', () => {
    
})
console.log(user);