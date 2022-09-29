import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@maglev/api-interfaces';

@Component({
  selector: 'maglev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
  average = 5;
  debounce = 9000;
  private ratings: number[] = [];
  ratingChanged(rating: number | null) {
    console.log(rating);
    if (rating) {
      this.ratings = [...this.ratings, rating];
      this.average = this.ratings.reduce((a, b) => a + b) / this.ratings.length;
    }
  }
}
