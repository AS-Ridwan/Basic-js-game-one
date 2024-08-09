'use strict';

// Select Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
let score = [0, 0];

dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDice}.png`;
  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document.querySelector(`.player--${activePlayer}`);
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`);
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] = score[activePlayer] + currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
});
