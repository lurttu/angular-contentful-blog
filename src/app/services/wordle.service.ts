import { Injectable } from '@angular/core';
import data from '../../../base.json';

@Injectable()
export default class WordleService {
  constructor() {}

  getRandomWord(): string {
    const words = this.getWordleData();
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  getWordleData(): any {
    return data;
  }
}
