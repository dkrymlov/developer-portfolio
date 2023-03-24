import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card5',
  templateUrl: './about-card5.component.html',
  styleUrls: ['./about-card5.component.scss']
})
export class AboutCard5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    window.open("https://savelife.in.ua/en/")
  }
}
