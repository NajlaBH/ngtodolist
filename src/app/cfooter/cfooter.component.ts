import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrls: ['./cfooter.component.css']
})
export class CfooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // Define footer Date
  now = new Date();

  // Convert date to string
  footerdate = (this.now.getMonth() +1) + " | " + this.now.getFullYear();
}
