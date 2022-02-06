import { Component } from '@angular/core';
import WordleService from '../services/wordle.service';

export interface Letter {
  value: string;
  status: string;
}

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss'],
})
export class WordleComponent {
  public value = '';

  public keyboardRow1: Letter[] = [
    { value: 'q', status: '' },
    { value: 'w', status: '' },
    { value: 'e', status: '' },
    { value: 'r', status: '' },
    { value: 't', status: '' },
    { value: 'y', status: '' },
    { value: 'u', status: '' },
    { value: 'i', status: '' },
    { value: 'o', status: '' },
    { value: 'p', status: '' },
    { value: 'å', status: '' },
  ];
  public keyboardRow2: Letter[] = [
    { value: 'a', status: '' },
    { value: 's', status: '' },
    { value: 'd', status: '' },
    { value: 'f', status: '' },
    { value: 'g', status: '' },
    { value: 'h', status: '' },
    { value: 'j', status: '' },
    { value: 'k', status: '' },
    { value: 'l', status: '' },
    { value: 'ö', status: '' },
    { value: 'ä', status: '' },
  ];
  public keyboardRow3: Letter[] = [
    { value: 'del', status: '' },
    { value: 'z', status: '' },
    { value: 'x', status: '' },
    { value: 'c', status: '' },
    { value: 'v', status: '' },
    { value: 'b', status: '' },
    { value: 'n', status: '' },
    { value: 'm', status: '' },
    { value: 'arvaa', status: '' },
  ];
  public keyboardRows: Letter[][] = [
    this.keyboardRow1,
    this.keyboardRow2,
    this.keyboardRow3,
  ];
  public word: string;
  public guesses: Letter[][] = [];
  public currentGuess: Letter[] = [];

  public message = '';

  public maxGuesses = 6;

  public currentGuessIndex = 0;

  constructor(public wordleService: WordleService) {
    this.word = this.wordleService.getRandomWord();
    this.initGuesses();
  }

  keyPress(key: string): void {
    if (key === 'arvaa') {
      this.checkWord(this.currentGuess.map((l) => l.value).join(''));
      this.guesses[this.currentGuessIndex] = this.currentGuess;
      this.currentGuessIndex++;
      this.currentGuess = [];
    } else {
      if (key === 'del' && this.currentGuess.length > 0) {
        this.currentGuess = this.currentGuess.slice(0, -1);
      } else if (this.currentGuess.length <= 5) {
        this.currentGuess.push({ value: key, status: '' });
      }
    }
  }

  checkWord(word: string): void {
    if (word.length !== 5) {
      return;
    }
    if (word === this.word) {
      this.message = 'Oikein!';
      return;
    }
    if (this.currentGuessIndex + 1 === this.maxGuesses) {
      this.message = 'Väärin! Oikea sana olisi ' + this.word;
      return;
    }
    word.split('').forEach((letter, index) => {
      if (this.word.includes(letter)) {
        if (this.word[index] === letter) {
          this.keyboardRows.forEach((arr) => {
            arr.forEach((letterObj) => {
              if (letterObj.value === letter) {
                letterObj.status = 'correct';
              }
            });
          });
        } else {
          this.keyboardRows.forEach((arr) => {
            arr.forEach((letterObj) => {
              if (letterObj.value === letter) {
                letterObj.status = 'present';
              }
            });
          });
        }
      } else {
        this.keyboardRows.forEach((arr) => {
          arr.forEach((letterObj) => {
            if (letterObj.value === letter) {
              letterObj.status = 'incorrect';
            }
          });
        });
      }
    });
  }

  checkForStatus(letter: string, status: string): boolean {
    const rowIndex = this.keyboardRows.findIndex(
      (r) => r.findIndex((obj) => obj.value === letter) !== -1
    );
    if (rowIndex !== -1) {
      const letterObj = this.keyboardRows[rowIndex].find(
        (obj) => obj.value === letter
      );
      if (letterObj) {
        return letterObj.status === status;
      } else {
        return false;
      }
    }
    return false;
  }

  public initGuesses(): void {
    const letter = {
      value: '',
      status: '',
    };
    for (let i = 0; i < this.maxGuesses; i++) {
      this.guesses[i] = [];
      for (let j = 0; j < 5; j++) {
        this.guesses[i][j] = letter;
      }
    }
  }
  public reset(): void {
    this.word = this.wordleService.getRandomWord();
    this.initGuesses();
    this.message = '';
  }
}
