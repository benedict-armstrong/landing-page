import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss'],
})
export class LinkItemComponent implements OnInit {
  @Input() link: { title: string; url: string } | undefined;

  constructor() {}

  ngOnInit(): void {}
}
