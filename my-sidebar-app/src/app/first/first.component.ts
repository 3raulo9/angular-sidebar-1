import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  texts: string[] = [];

  ngOnInit(): void {
    this.texts = [
      'Text box content 1',
      'Text box content 2',
      'Text box content 3',
      'Text box content 4',
      'Text box content 5',
      'Text box content 6',
      'Text box content 7',
      'Text box content 8',
      'Text box content 9',
      'Text box content 10',
      // Add more text content as needed
    ];
  }
}
