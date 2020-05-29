import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.component.html',
  styleUrls: ['./callapi.component.scss']
})
export class CallapiComponent implements OnInit {
  postData;
  constructor(private http: HttpClient) { }
  ngOnInit(): void
  {
    this.http.get( 'http://jsonplaceholder.typicode.com/users' )
      .subscribe( result =>
    {
        this.postData = result;
    } );
  }

}
