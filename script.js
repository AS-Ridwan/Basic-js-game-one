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

let activePlayer, currentScore, score, isPlaying;

// init function
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  isPlaying = true;

  dice.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.querySelector(`.player--${activePlayer}`);

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll Dice BTN Event Function
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
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
  }
});

// Hold BTN Event Function
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    score[activePlayer] = score[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

// BTN load New Game  Event Function
btnNew.addEventListener('click', init);

// game work done
