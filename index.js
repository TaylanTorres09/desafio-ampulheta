const ampulheta = require("./ampulheta").ampulheta;

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// Input do usuário:
rl.question('Digite a dimensão da ampulheta: ', (answer) => {

  try {
    
    ampulheta(parseInt(answer, 10));

  }catch(err){
    console.log(err);
  }

  rl.close();
});