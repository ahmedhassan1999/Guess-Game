'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '๐Correct Number!';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector('.message').textContent = 'โ No Number!';
    displayMessage('โ No Number!');
  } else if (guess === SecretNumber) {
    //document.querySelector('.message').textContent = '๐Correct Number!';
    document.querySelector('.number').textContent = SecretNumber;
    displayMessage('๐Correct Number!');
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > SecretNumber ? ' ๐ Too high' : ' ๐ Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } //document.querySelector('.message').textContent = '๐ Sory You Lose';
    else displayMessage('๐ Sory You Lose');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = ' Start guessing...';
  displayMessage(' Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
