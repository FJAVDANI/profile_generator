const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What's your name?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question('What's an activity you like doing?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r2.close();
});


const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r3.question('What do you listen to while doing that?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r3.close();
});

const r4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r4.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r4.close();
});



const r5 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r5.question('What's your favourite thing to eat for that meal?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r5.close();
});


const r6 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r6.question('Which sport is your absolute favourite?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r6.close();
});


const r7= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r7.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  r7close();
});








