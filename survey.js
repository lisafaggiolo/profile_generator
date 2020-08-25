const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question("What's your name? Nicknames are also acceptable :)" , (answer1) => {
  answers['Nickname'] = answer1;
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  
  rl.question("What's an activity you like doing? \n", (answer2) => {
    answers['FaveActivity'] = answer2;
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question("What do you listen to while doing that?\n", (answer3) => {
      answers['FaveActivityMusic'] = answer3;
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer3) => {
        answers['FaveMeal'] = answer3;
        console.log(`Thank you for your valuable feedback: ${answer3}`);
      
        rl.question("What's your favourite thing to eat for that meal?\n", (answer4) => {
          answers['FaveFood'] = answer4
          console.log(`Thank you for your valuable feedback: ${answer4}`);
        
          rl.question("Which sport is your absolute favourite?\n", (answer5) => {
            answers['FaveSport'] = answer5
            console.log(`Thank you for your valuable feedback: ${answer5}`);
          
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer6) => {
              answers['Superpower'] = answer6
              console.log(`Thank you for your valuable feedback: ${answer6}`);
            
            
              finalProfile = JSON.stringify(answers, null, 6); // (Optional) beautiful indented output.
              console.log(finalProfile);
              console.log(answers)

              rl.close();
            });
            
          });
                  
        });
  
      }); 
    
    });
  
  });

});









