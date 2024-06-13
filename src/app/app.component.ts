import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'cypress-testing';

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.login();
  }
}
