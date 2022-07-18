import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mainTitle = 'I AM WEB DEVELOPER !';
  subTitle = ' Read More About Me!';
  aboutMeText = 'About Me!';

  constructor() {}

  ngOnInit(): void {}
}
