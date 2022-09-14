import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { scoreDetails } from '../interfaces/player';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = environment.databaseURL;
  private apiKey = environment.databaseKey;
 
  // private player: scoreDetails []= [
  //   // {  "playerName": "Miraj", "score": 75 },
  //   // { "playerName": "Tito", "score": 98 }
  // ];

  constructor(private http: HttpClient) { }

  getScores(): Observable<scoreDetails[]> {
    return this.http.get<scoreDetails[]>(`${this.baseUrl}`, {
      headers: { "x-apikey": this.apiKey }
    });
  }
  addScore(NewScore: scoreDetails): Observable<scoreDetails> {
    return this.http.post<scoreDetails>(`${this.baseUrl}`, NewScore, {
      headers: { "x-apikey": this.apiKey }
    });
  }
  removeScore(_id?: string): Observable<void> {
    if (!_id) {
      return of();
    }
    return this.http.delete<void>(`${this.baseUrl}/${_id}`, {
      headers: { "x-apikey": this.apiKey }
    });
  }


}



















//   var request = require("request");

// // ------- GET all documents from the highscores collection ---------------

//    var getScore = { method: 'GET',
//     url: 'https://trivia-8125.restdb.io/rest/highscores',
//     headers: 
//      { 'cache-control': 'no-cache',
//        'x-apikey': '14284f7472d167d9ccb5dfe612e77321e9edb' } };
  
//   request(getScore, function (error: string | undefined, response: any, body: any) {
//     if (error) throw new Error(error);
  
//     console.log(body);
//   });
  
  
  
//   //------- POST a new document to the highscores collection -------------
  
//   var postScore = { method: 'POST',
//     url: 'https://trivia-8125.restdb.io/rest/highscores',
//     headers: 
//      { 'cache-control': 'no-cache',
//        'x-apikey': '14284f7472d167d9ccb5dfe612e77321e9edb',
//        'content-type': 'application/json' },
//     body: { field1: 'xyz', field2: 'abc' },
//     json: true };
  
//   request(postScore, function (error: string | undefined, response: any, body: any) {
//     if (error) throw new Error(error);
  
//     console.log(body);
//   });
  
    
//   //-------- PUT an updated document to the highscores collection ---------
  
//   var editScore = { method: 'PUT',
//     url: 'https://trivia-8125.restdb.io/rest/highscores/(ObjectID)',
//     headers: 
//      { 'cache-control': 'no-cache',
//        'x-apikey': '14284f7472d167d9ccb5dfe612e77321e9edb',
//        'content-type': 'application/json' },
//     body: { field2: 'new value' },
//     json: true };
  
//   request(editScore, function (error: string | undefined, response: any, body: any) {
//     if (error) throw new Error(error);
  
//     console.log(body);
//   });
  

//   //------- DELETE a document from the highscores collection ---------
 
//   var deleteScore = { method: 'DELETE',
//     url: 'https://trivia-8125.restdb.io/rest/highscores/(ObjectID)',
//     headers: 
//      { 'cache-control': 'no-cache',
//        'x-apikey': '14284f7472d167d9ccb5dfe612e77321e9edb',
//        'content-type': 'application/json' } };
  
//   request(deleteScore, function (error: string | undefined, response: any, body: any) {
//     if (error) throw new Error(error);
  
//     console.log(body);
//   });


