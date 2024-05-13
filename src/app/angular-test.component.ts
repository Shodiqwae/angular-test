import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'test-angular',
  templateUrl: './angulart-test.component.html',
})
export class AngularTest implements OnInit {
  countries: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe(data => {
        this.countries = data;
      });
  }
}
