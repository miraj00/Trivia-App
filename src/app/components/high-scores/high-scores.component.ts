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
      name: 'Joker',
      score: 100000,
    },
    {
      name: 'Ivy',
      score: 65,
    },
    {
      name: 'Harley',
      score: 199,
    },
    {
      name: 'Quinn',
      score: 34,
    },
    {
      name: 'Batman',
      score: 5,
    },
    {
      name: 'Rock',
      score: 34356,
    },
    {
      name: 'Murica',
      score: 565,
    },
    {
      name: 'Green',
      score: 5343,
    },
    {
      name: 'Jason',
      score: 343,
    },
    {
      name: 'Freddie',
      score: 876,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getTopScores();
    this.sortHighScores();
  }

  getTopScores() {}

  sortHighScores() {
    this.highScores = this.highScores
      .sort((a, b) => {
        return b.score - a.score;
      })
      .slice(0, 5);
  }
}
