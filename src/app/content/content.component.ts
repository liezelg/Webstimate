import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() isShowing = false;
  constructor() {}

  ngOnInit() {
  }

}
