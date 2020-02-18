// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

function makeChallengeBanner(n) {
    console.log(`######## Challenge ${n} ########`)
}
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
makeChallengeBanner(1);
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
for (num =1 ; num<=20; num++) {
    if (num%3===0)
    console.log(num);
}
    num = num - 1
i = 1;

// Use `if` and a modulus operation.
makeChallengeBanner(2)
if(0) {
    console.log("");
} else {
    console.log("");
}
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
makeChallengeBanner(3)
// Console out the numbers from 1-20. BACKWARDS.
makeChallengeBanner(4)
for (i=20; i >= 1; i--){
    console.log(i);
}
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
makeChallengeBanner(5)
const str = "BoyhowdyamIgoodatthis!";
const strArray = str.split('');

strArray.map(s => console.log(s));
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
makeChallengeBanner(6)
const str = "BoyhowdyamIgoodatthis!";
const strArray = str.split('');

strArray.map(s => console.log(s));
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
makeChallengeBanner(7)
let str = 'Am I the best?';
let letterSeven = 0;
while (letterSeven < str.length) {
    console.log(str[letterSeven].toUpperCase());
    letterSeven++;
}




// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.


// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.


// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
