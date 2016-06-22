import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavigationService } from '../navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-left-nav',
  templateUrl: 'left-nav.component.html',
  styleUrls: ['left-nav.component.css'],
  directives: [NavItemComponent],
  providers: [NavigationService]
})
export class LeftNavComponent implements OnInit {
  navItems;
  navStatus = "longLi";
  borderStatus="border";
  currentlyShowing;
  @Output("LeftNavClicked") change = new EventEmitter();

  constructor(ns: NavigationService) {
    this.navItems = ns.getNavItems();
  }
  onNavItemClicked($event){
    this.currentlyShowing = $event.currentlyShowing;
    this.change.emit({currentlyShowing: this.currentlyShowing});
    console.log("left-nav: " + this.currentlyShowing);
  };

  onClick(event) {
    this.navStatus= this.navStatus=="longLi" ? "shortLi" : "longLi";
    this.borderStatus= this.borderStatus=="border" ? "borderHidden" : "border";
  }

  ngOnInit() {
  }

}
