import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/links.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  json: any = data;

  links: { title: string; url: string }[] | undefined;

  constructor() {
    this.links = this.json.default;
  }

  ngOnInit(): void {}
}
