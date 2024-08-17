import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this line

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'octa-lg';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = 'http://localhost:3000/users';
    this.http.get(url).subscribe({
      next: (data) => {
        console.log('Data:', data);
        this.users = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
