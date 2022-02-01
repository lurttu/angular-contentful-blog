import { AfterViewInit, Component } from '@angular/core';
import Keyboard from 'simple-keyboard';
import WordleService from '../services/wordle.service';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss'],
})
export class WordleComponent implements AfterViewInit {
  public value = '';
  public keyboard: Keyboard;

  public word: string;

  constructor(public wordleService: WordleService) {
    this.word = this.wordleService.getRandomWord();
    console.log(this.word);
  }

  ngAfterViewInit(): void {
    this.keyboard = new Keyboard({
      onChange: (input) => this.onChange(input),
      onKeyPress: (button: any) => this.onKeyPress(button),
      theme: 'hg-theme-default hg-layout-default myTheme',
      layout: {
        default: [
          'q w e r t y u i o p å',
          'a s d f g h j k l ö ä {bksp}',
          'z x c v b n m {enter}',
        ],
      },
      buttonTheme: [
        {
          class: 'hg-red',
          buttons: 'Q W E R T Y q w e r t y',
        },
      ],
    });
  }

  onChange(input: string): void {
    if (input.length <= 5) {
      this.value = input;
    }
  }

  onKeyPress(button: string): void {
    if (button === '{enter}') {
      this.checkWord(this.value);
    } else if (button === '{bksp}') {
      this.value = this.value.slice(0, -1);
    }
  }

  checkWord(word: string): void {
    if (word.length !== 5) {
      return;
    }
    if (this.word === word) {
      console.log('Correct!');
      this.value = '';
    } else {
      console.log('Incorrect!');
      this.value = '';
    }
  }

  onInputChange(event: any): void {
    this.keyboard.setInput(event.target.value);
  }
}
