import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "post-api",
  templateUrl: './PostApi.component.html'
})
  export class PostApi implements OnInit {
    postData: any;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    postDataToApi() {
      this.http.post('https://httpbin.org/post', 'Jawa')
        .subscribe(response => {
          this.postData = response;
        });
    }
  }
