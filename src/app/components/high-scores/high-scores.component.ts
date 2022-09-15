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

  database: scoreDetails[] = [];
  loading = true;

  newHighScore: boolean = false;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.getTopScores();
    // this.highScores.push({
    //   name: this.userName!,
    //   score: this.playerScore!,
    // });

    this.loadDatabase();
    this.sortHighScores();
  }

  getTopScores() {}

  sortHighScores() {
    this.database = this.database
      .sort((a, b) => {
        return b.highscore - a.highscore;
      })
      .slice(0, 15);
    this.checkNewHighScore();
  }

  checkNewHighScore() {
    if (this.database[0]?.playerName === this.userName) {
      this.newHighScore = true;
    }
  }

  loadDatabase() {
    this.loading = true;
    this.databaseService.getScores().subscribe((newDatabase) => {
      this.database = newDatabase;
      this.loading = false;
    });
  }

  removeScore(database: scoreDetails) {
    this.database = [];
    this.loading = true;
    this.databaseService.removeScore(database._id).subscribe(() => {
      this.loadDatabase(); // reloading db
    });
  }
}
