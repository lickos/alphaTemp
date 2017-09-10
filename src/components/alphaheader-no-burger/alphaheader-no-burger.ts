import { Component } from '@angular/core';

/**
 * Generated class for the AlphaheaderNoBurgerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alphaheader-no-burger',
  templateUrl: 'alphaheader-no-burger.html'
})
export class AlphaheaderNoBurgerComponent {

  text: string;

  constructor() {
    console.log('Hello AlphaheaderNoBurgerComponent Component');
    this.text = 'Hello World';
  }

}
