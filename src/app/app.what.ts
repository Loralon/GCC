import {Component} from '@angular/core'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import { ScrollimateService } from "ng2-scrollimate";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'what',
  templateUrl:'app.what.html',
  styleUrls: ['./app.what.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),

    ]),
    trigger('myAwesomeAnimation2', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),

    ])
  ]
})
export class AppWhat {state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
