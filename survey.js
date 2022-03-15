const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = '';

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  paragraph += `My name is ${answer}. `
  rl.question("What's an activity you like doing?", (answer) => {
    paragraph += `An activity I like doing is ${answer}, `
    rl.question("What do you listen to while doing that?", (answer) => {
      paragraph += `and I listen to ${answer} while I do that. `
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        paragraph += `My favourite meal is ${answer}, `
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          paragraph += `and my favourite food pertaining to that meal is ${answer}. `
          rl.question("Which sport is your absolute favourite?", (answer) => {
            paragraph += `My favourite sport is ${answer}. `
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              paragraph += `I am amazing at ${answer}. `
              console.log('\n' + paragraph);
              rl.close();
            });
          });
        });
      });
    });
  });
});