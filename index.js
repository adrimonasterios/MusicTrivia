let rl = require('readline-sync');

let genre = function(){

}

let userScore = 0;

let rockAllQuestions = [
  `Which of these artists sold more albums?`,
  `Which of these music videos was released first on  MTV?`,
  `How many people attended Woodstock (1969)?`,
  `Which of these artists did NOT perform in Woodstock (1969)?`,
  `Who was a member of The Beatles?`,
  `Who was the lead singer of Led Zeppelin?`,
  `Where was Carlos Santana born?`,
  `Who is NOT part of the '27 Club'?`,
  `Which of these bands was formed first?`,
  `Who has the longest-running fan club according to Guinnes Book of World Records?`
];

let rockAllAnswers = [
  [` `,`The Beatles`, `Elvis`, `Led Zeppelin`, `Eagles`],
  [` `,`She Won't Dance With Me - Rod Stewart`, `You Better You Bet - The Who`, `Sailing - Rod Stewart`, `Iron Maiden - Iron Maiden`],
  [` `,`400.000-500.00`, `500.000-600.000`, `300.000-400.000`, `200.000-300.000`],
  [` `,`Bob Dylan`, `Richie Havens`, `Janis Joplin`, `Santana`],
  [` `,`Richard Starkey`, `Georg Albert Ruthenberg`, `Richard Harrison`, `Paul Daniel Frehley`],
  [` `,`Robert Plant`, `Steven Tyler`, `Kurt Cobain`, `Jim Morrison`],
  [` `,`Mexico`, `USA`, `Costa Rica`, `Panama`],
  [` `,`Keith Moon`, `Jimi Hendrix`, `Janis Joplin`, `Brian Jones`],
  [` `,`Beatles`, `Rolling Stones`, `The Kinks`, `The Who`],
  [` `,`Queen`, `Nirvana`, `Beatles`, `Rolling Stones`]
];

let hiphopAllQuestions = [
  `What is the stage name of Marshall Bruce Mathers III?`,
  `Which rapper is also known as "Slim Shady"?`,
  `Who was NOT a member of N.W.A?`,
  `What does N.W.A stand for?`,
  `When was Jay-Z's first album released?`,
  `Which rapper's real name is Andre Young?`,
  `34 Which of these is not one of 50 Cent's albums?`,
  `Who is the main "Aftermath" producer?`,
  `Which of these songs was NOT performed by Notorious B.I.G?`,
  `At what age did 2pac die?`
];

let hiphopAllAnswers = [
  [` `,`Eminem`, `50 Cent`, `2pac`, `Snoop Dogg`],
  [` `,`Eminem`, `B.I.G`, `Wiz Khalifa`, `Ice Cube`],
  [` `,`2pac`, `Ice Cube`, `Eazy-E`, `MC Ren`],
  [` `,`Niggaz Wit Attitudes`, `North-West Airlines`, `No Whites Allowed`, `Nip Without Askin'`],
  [` `,`1996`, `1992`, `1998`, `2001`],
  [` `,`Dr. Dre`, `Jay-Z`, `Kanye West`, `LL Cool J`],
  [` `,`Chicken and Beer`, `Get Rich or Die Trying`, `Massacre`, `Beg for Mercy`],
  [` `,`Dr. Dre`, `DJ Premier`, `J Dilla`, `Kanye West`],
  [` `,`Ambitionz Az a Ridah`, `Hypnotize`, `Juicy`, `Old Thing Back`],
  [` `,`25`,`28`,`30`,`32`]
];

let popAllQuestions = [
  `Who is known as the 'King of Pop'?`,
  `Which of the following songs was NOT performed by Madonna?`,
  `What is the best-selling album of all times?`,
  `To which boy band did Justin Timberlake belong to?`,
  `Where was Robbie Williams born?`,
  `In which song do Britney Spears and Madonna perform together?`,
  `Who performs 'Single Ladies'?`,
  `What is the real name of Bruno Mars?`,
  `To which of the Spice Girls did David Beckham marry?`,
  `Which one was NOT part of the Backstreet Boys?`
];

let popAllAnswers = [
  [` `,`Michael Jackson`, `Justin Timberlake`, `Bruno Mars`, `Robbie Williams`],
  [` `,`Man in the Mirror`, `Don't Tell Me`, `Vogue`, `Music`],
  [` `,`Michael Jackson - Thriller`, `Madonna - Ray of Light`, `Michael Jackson - Dangerous`, `Madonna - Maddonna`],
  [` `,`NSYNC`, `Backstreet Boys`, `Westlife`, `Five`],
  [` `,`Staffordshire`, `Birmingham`, `Lancaster`, `Liverpool`],
  [` `,`Me Against the Music`, `Baby One More Time`, `Vogue`, `Die Another Day`],
  [` `,`Beyonce`, `Alicia Keys`, `Janet Jackson`, `Rihanna`],
  [` `,`Peter Gene Hernandez`, `Bruno Martinez`, `Bruno Gene Mars`, `Brian Hernandez`],
  [` `,`Victoria`, `Emma`, `Melanie`, `Geri`],
  [` `,`Lance Bass`, `Howie Dorough`, `Kevin Richardson`, `Brian Litrell`]
];


function genreChoice(){
  let genre = rl.question(`Welcome to Music Culture! Which Genre will you choose?\n- Rock\n- HipHop\n- Pop\n\nI choose: `);
  if(genre.toLowerCase() === 'rock'){
    console.log(`\nWelcome to the Jungle!\n`);
    setTimeout(rock, 1500);
  }else if(genre.toLowerCase() === 'hiphop'){
    console.log(`\nThis is Gangsta's Paradise!\n`);
    setTimeout(hiphop, 1500);
  }else if(genre.toLowerCase() === 'pop'){
    console.log(`\nYeah! Don't Stop 'Til You Get Enough!\n`);
    setTimeout(pop, 1500);
  }
  return
}

function rock(){
  for(let i=0; i<5; i++){
    let rockQuestions = rockAllQuestions.slice(0, rockAllQuestions.length);
    let rockAnswers = rockAllAnswers.slice(0, rockAllAnswers.length);
    let randomQuestion = Math.floor(Math.random() * rockQuestions.length);
    // let answer_1 = function(){return 0};/*function(){
    //   return Math.floor(Math.random() * 4);
    // };*/
    // let answer_2 = function(a){
    //   let randomanswer = 0;
    //   let answer_1 = a;
    //   while(randomanswer == answer_1){
    //     randomanswer = Math.floor(Math.random() * 4);
    //     console.log(randomanswer);
    //     return randomanswer
    //   };
    //   return randomanswer;
    // };
    // let answer_3 = function(a,b){
    //   let randomanswer = 0;
    //   let answer_1 = a;
    //   let answer_2 = b;
    //   while(randomanswer == answer_1 || randomanswer == answer_2){
    //     randomanswer = Math.floor(Math.random() * 4);
    //     return randomanswer;
    //   };
    //   return randomanswer;
    // };
    // let answer_4 = function(a,b,c){
    //   let randomanswer = 0;
    //   let answer_1 = a;
    //   let answer_2 = b;
    //   let answer_3 = c;
    //   while(randomanswer == answer_1 || randomanswer == answer_2 || randomanswer == answer_3){
    //     randomanswer = Math.floor(Math.random() * 4);
    //     return randomanswer;
    //   };
    //   return randomanswer;
    // };
    let answer_1;
    let answer_2;
    let answer_3;
    let answer_4;

    while(answer_1 == answer_2 || answer_1 == answer_3 || answer_1 == answer_4 || answer_2 == answer_3 || answer_2 == answer_4 || answer_3 == answer_4){
      answer_1 = Math.ceil(Math.random() * 4);
      answer_2 = Math.ceil(Math.random() * 4);
      answer_3 = Math.ceil(Math.random() * 4);
      answer_4 = Math.ceil(Math.random() * 4);
    };

    function uChoice(){
      let userChoice = rl.question(`${rockQuestions[randomQuestion]}\n1) ${rockAnswers[randomQuestion][answer_1]}\n2) ${rockAnswers[randomQuestion][answer_2]}\n3) ${rockAnswers[randomQuestion][answer_3]}\n4) ${rockAnswers[randomQuestion][answer_4]}\n\nI choose option: `);

      if(userChoice == 1){
        userChoice = answer_1
      }else if(userChoice == 2){
        userChoice = answer_2
      }else if(userChoice == 3){
        userChoice = answer_3
      }else if(userChoice == 4){
        userChoice = answer_4
      }else{
        console.log(`Invaliiiidddd`);
      };
      return userChoice;
    };

    function validator(){
      let userChoice2 = uChoice();
      if(rockAnswers[randomQuestion][userChoice2] === rockAnswers[randomQuestion][1] ){
        console.log(`\nCorrect!\n\n`);
        userScore ++;
      }else{
        console.log(`\nIncorrect!\n\n`);
      };
      return userScore
      };
      validator();
      rockQuestions.splice(randomQuestion, 1);
      rockAnswers.splice(randomQuestion, 1);
    };

  console.log(`Your Final Score is: ${userScore}!\n`);
  userScore = 0;

  function pAgain(){
    let again = rl.question(`Do you want to play again? (Y/N)\n`);
      if(again.toLowerCase() == 'y'){
      genreChoice()
    }else if(again.toLowerCase() == 'n'){
      console.log(`\n\nWe hope you had fun! See ya!\n\n`)
      return
    }else{
      console.log(`Invalid Command`)
      pAgain()
    };
  };
  pAgain();
};






function hiphop(){
  for(let i=0; i<5; i++){
    let hiphopQuestions = hiphopAllQuestions.slice(0, hiphopAllQuestions.length);
    let hiphopAnswers = hiphopAllAnswers.slice(0, hiphopAllAnswers.length);
    let randomQuestion = Math.floor(Math.random() * hiphopQuestions.length);

    let answer_1;
    let answer_2;
    let answer_3;
    let answer_4;

    while(answer_1 == answer_2 || answer_1 == answer_3 || answer_1 == answer_4 || answer_2 == answer_3 || answer_2 == answer_4 || answer_3 == answer_4){
      answer_1 = Math.ceil(Math.random() * 4);
      answer_2 = Math.ceil(Math.random() * 4);
      answer_3 = Math.ceil(Math.random() * 4);
      answer_4 = Math.ceil(Math.random() * 4);
    };

    function uChoice(){
      let userChoice = rl.question(`${hiphopQuestions[randomQuestion]}\n1) ${hiphopAnswers[randomQuestion][answer_1]}\n2) ${hiphopAnswers[randomQuestion][answer_2]}\n3) ${hiphopAnswers[randomQuestion][answer_3]}\n4) ${hiphopAnswers[randomQuestion][answer_4]}\n\nI choose option: `);

      if(userChoice == 1){
        userChoice = answer_1
      }else if(userChoice == 2){
        userChoice = answer_2
      }else if(userChoice == 3){
        userChoice = answer_3
      }else if(userChoice == 4){
        userChoice = answer_4
      }else{
        console.log(`Invaliiiidddd`);
      };
      return userChoice;
    };

    function validator(){
      let userChoice2 = uChoice();
      if(hiphopAnswers[randomQuestion][userChoice2] === hiphopAnswers[randomQuestion][1] ){
        console.log(`\nCorrect!\n\n`);
        userScore ++;
      }else{
        console.log(`\nIncorrect!\n\n`);
      };
      return userScore
      };
      validator();
      hiphopQuestions.splice(randomQuestion, 1);
      hiphopAnswers.splice(randomQuestion, 1);
    };

  console.log(`Your Final Score is: ${userScore}!\n`);
  userScore = 0;

  function pAgain(){
    let again = rl.question(`Do you want to play again? (Y/N)\n`);
      if(again.toLowerCase() == 'y'){
      genreChoice()
    }else if(again.toLowerCase() == 'n'){
      console.log(`\n\nWe hope you had fun! See ya!\n\n`)
      return
    }else{
      console.log(`Invalid Command`)
      pAgain()
    };
  };
  pAgain();
};






function pop(){
  for(let i=0; i<5; i++){
    let popQuestions = popAllQuestions.slice(0, popAllQuestions.length);
    let popAnswers = popAllAnswers.slice(0, popAllAnswers.length);
    let randomQuestion = Math.floor(Math.random() * popQuestions.length);

    let answer_1;
    let answer_2;
    let answer_3;
    let answer_4;

    while(answer_1 == answer_2 || answer_1 == answer_3 || answer_1 == answer_4 || answer_2 == answer_3 || answer_2 == answer_4 || answer_3 == answer_4){
      answer_1 = Math.ceil(Math.random() * 4);
      answer_2 = Math.ceil(Math.random() * 4);
      answer_3 = Math.ceil(Math.random() * 4);
      answer_4 = Math.ceil(Math.random() * 4);
    };

    function uChoice(){
      let userChoice = rl.question(`${popQuestions[randomQuestion]}\n1) ${popAnswers[randomQuestion][answer_1]}\n2) ${popAnswers[randomQuestion][answer_2]}\n3) ${popAnswers[randomQuestion][answer_3]}\n4) ${popAnswers[randomQuestion][answer_4]}\n\nI choose option: `);

      if(userChoice == 1){
        userChoice = answer_1
      }else if(userChoice == 2){
        userChoice = answer_2
      }else if(userChoice == 3){
        userChoice = answer_3
      }else if(userChoice == 4){
        userChoice = answer_4
      }else{
        console.log(`Invaliiiidddd`);
      };
      return userChoice;
    };

    function validator(){
      let userChoice2 = uChoice();
      if(popAnswers[randomQuestion][userChoice2] === popAnswers[randomQuestion][1] ){
        console.log(`\nCorrect!\n\n`);
        userScore ++;
      }else{
        console.log(`\nIncorrect!\n\n`);
      };
      return userScore
      };
      validator();
      popQuestions.splice(randomQuestion, 1);
      popAnswers.splice(randomQuestion, 1);
    };

  console.log(`Your Final Score is: ${userScore}!\n`);
  userScore = 0;

  function pAgain(){
    let again = rl.question(`Do you want to play again? (Y/N)\n`);
      if(again.toLowerCase() == 'y'){
      genreChoice()
    }else if(again.toLowerCase() == 'n'){
      console.log(`\n\nWe hope you had fun! See ya!\n\n`)
      return
    }else{
      console.log(`Invalid Command`)
      pAgain()
    };
  };
  pAgain();
};


genreChoice();
