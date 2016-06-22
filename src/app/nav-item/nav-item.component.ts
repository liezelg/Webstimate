import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navLabel = '';
  @Input() glyphName = '';
  @Output("NavItemClicked") change = new EventEmitter();

  navItemClicked(){
    this.change.emit({currentlyShowing: this.navLabel});
  }
  constructor() {}

  ngOnInit() {
  }

}
