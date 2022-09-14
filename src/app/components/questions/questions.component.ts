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
  @Input() difficulty: string = '';

  playerRightAnswers: number = 0;
  playerScore: number = 0;
  totalQuestions: number = 0;

  answeredQuestions = new Set();
  currentQuestion: number = 0;

  showHighScores: boolean = false;
  scoreMultiplier: number = 1;

  constructor() {
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
    this.getMultiplier();
    if (event === this.questions[index].correctAnswer) {
      this.playerRightAnswers += 1;
      this.currentQuestion += 1;
    } else {
      this.currentQuestion += 1;
      this.playerRightAnswers -= 1;
      this.playerRightAnswers < 0
        ? (this.playerRightAnswers = 0)
        : (this.playerRightAnswers = this.playerRightAnswers);
    }
    this.calculateScore();
  }

  calculateScore() {
    this.playerScore =
      ((this.playerRightAnswers * this.scoreMultiplier) /
        this.questions.length) *
      100;
  }

  getMultiplier() {
    switch (this.difficulty) {
      case 'easy':
        this.scoreMultiplier = 1;
        break;
      case 'medium':
        this.scoreMultiplier = 3;
        break;
      case 'hard':
        this.scoreMultiplier = 5;
        break;
      default:
        this.scoreMultiplier = 1;
    }
    console.log(this.scoreMultiplier);
  }

  submitScore() {
    this.answeredQuestions = new Set();
    this.showHighScores = true;
    // this.playerRightAnswers = 0;
    // this.calculateScore();
  }
}
