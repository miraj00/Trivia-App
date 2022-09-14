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
      score: 100,
    },
    {
      name: 'Ivy',
      score: 40,
    },
    {
      name: 'Harley',
      score: 90,
    },
    {
      name: 'Quinn',
      score: 80,
    },
    {
      name: 'Batman',
      score: 70,
    },
    {
      name: 'Rock',
      score: 30,
    },
    {
      name: 'Murica',
      score: 20,
    },
    {
      name: 'Green',
      score: 10,
    },
    {
      name: 'Jason',
      score: 0,
    },
    {
      name: 'Freddie',
      score: 10,
    },
  ];

  example = [];

  constructor() {}

  ngOnInit(): void {
    this.getTopScores();
    this.highScores.push({
      name: this.userName!,
      score: this.playerScore!,
    });
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
