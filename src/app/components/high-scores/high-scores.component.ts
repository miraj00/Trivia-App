import { Component, Input, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

import { scoreDetails } from 'src/app/interfaces/player';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css'],
})
export class HighScoresComponent implements OnInit {
  @Input() userName: string | undefined;
  @Input() playerScore: number | undefined;

  @Input() database: scoreDetails[] = [];

  newHighScore: boolean = false;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.getTopScores();
    this.sortHighScores();
  }

  getTopScores() {}

  sortHighScores() {
    this.database = this.database
      .sort((a, b) => {
        return b.highscore - a.highscore;
      })
      .slice(0, 15);
  }

  checkNewHighScore() {
    if (this.database[0]?.playerName === this.userName) {
      this.newHighScore = true;
    }
  }

  removeScore(database: scoreDetails) {
    this.database = [];
    this.databaseService.removeScore(database._id).subscribe(() => {});
    this.loadDatabase();
  }

  loadDatabase() {
    this.databaseService.getScores().subscribe((newDatabase) => {
      this.database = newDatabase;
    });
  }
}
