class GuessingGame {
  constructor() {
    this._min = null;
    this._max = null;
    this._guessNumber = null;
  }

  setRange(min, max) {
    this._min = min;
    this._max = max;
  }

  guess() {

  }

  lower() {
    this._max = this._guessNumber;
  }

  greater() {
    this._min = this._guessNumber;
  }
}

module.exports = GuessingGame;
