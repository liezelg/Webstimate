import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

      getNavItems(): any[] {
        return [
          {
            glyphName: "glyphicon glyphicon-scissors",
            navLabel: "Scissors"
          },
          {
            glyphName: "glyphicon glyphicon-sunglasses",
            navLabel: "Sunglasses"
          },
          {
            glyphName: "glyphicon glyphicon-heart",
            navLabel: "Heart"
          }
        ]
    }

  }
