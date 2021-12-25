const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations! You won!'
      }
    }
  
  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations! You won!'
    }
  }
  
  if(userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations! You won';
    }
  }
  if (userChoice === 'bomb') {
    return 'Congratulations! You won!'
  }
  
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors'); // Change here :)
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()