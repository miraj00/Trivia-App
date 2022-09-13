import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnChanges {
  @Input() questions: Question[] = [
    {
      category: '',
      correctAnswer: '',
      incorrectAnswers: [],
      regions: [],
      question: '',
      tags: [],
      type: '',
      difficulty: '',
      id: '',
    },
  ];

  @Input() userName: string = '';

  playerRightAnswers: number = 0;
  playerScore: number = 0;
  totalQuestions: number = 0;

  answeredQuestions = new Set();

  showHighScores: boolean = false;

  constructor() {
    for (let question of this.questions) {
      console.log(question);
    }
    this.answeredQuestions = new Set();
  }

  ngOnInit(): void {
    this.playerRightAnswers = 0;
    this.calculateScore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['questions']);
  }

  getSelectedResult(event: any, index: number) {
    this.answeredQuestions.add(index);
    if (event === this.questions[index].correctAnswer) {
      this.playerRightAnswers += 1;
    } else {
      this.playerRightAnswers -= 1;
      this.playerRightAnswers < 0
        ? (this.playerRightAnswers = 0)
        : (this.playerRightAnswers = this.playerRightAnswers);
    }
    this.calculateScore();
  }

  calculateScore() {
    this.playerScore = (this.playerRightAnswers / this.questions.length) * 100;
  }

  submitScore() {
    this.answeredQuestions = new Set();
    this.showHighScores = true;
    // this.playerRightAnswers = 0;
    // this.calculateScore();
  }
}
