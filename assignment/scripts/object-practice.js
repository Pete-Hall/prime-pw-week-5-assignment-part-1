console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Pete',
  lastName: 'Hall',
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ['BBQ', 'Enchiladas', 'Corn Dogs']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
//const fullName = me.firstName + ' ' + me.lastName;
const fullName = `${me.firstName} ${me.lastName}`;
console.log('my full name is:', fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('my first fav food is (expecting BBQ):', me.favThreeFoods[0]);
console.log('my last fav food is (expecting Corn Dogs):', me.favThreeFoods[me.favThreeFoods.length-1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('my current shoe count is (expecting 10):', me.shoeCount);
console.log('I got a new pair of shoes!');
//me.shoeCount = 11;
me.shoeCount++; // increment makes sure it only increases by one (in case I forgot how many shoes I had to start with)
console.log('my new current shoe count is (expecting 11):', me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Blue';
console.log(me);