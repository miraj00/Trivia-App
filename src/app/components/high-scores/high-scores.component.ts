import { Component, Input, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css'],
})
export class HighScoresComponent implements OnInit {
  @Input() userName: string | undefined;
  @Input() playerScore: number | undefined;

  highScores = [
    {
      name: 'Someone',
      score: 100000,
    },
    {
      name: 'Test',
      score: 5,
    },
    {
      name: 'Else',
      score: 199,
    },
    {
      name: 'Person',
      score: 777,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getTopScores();
    this.sortScores();
  }

  getTopScores() {}

  sortScores() {
    this.highScores.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
