import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrls: ['./cheader.component.css']
})
export class CheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today = new Date();
  cheadertime = this.today.getHours() + ":"+ this.today.getMinutes();
}
