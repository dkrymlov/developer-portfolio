import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card3',
  templateUrl: './about-card3.component.html',
  styleUrls: ['./about-card3.component.scss']
})
export class AboutCard3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    window.open('https://www.linkedin.com/help/linkedin/answer/a507508/let-recruiters-know-you-re-open-to-work?lang=en')
  }
}
