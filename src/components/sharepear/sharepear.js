import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'sharepear'
})

@Template({
  url: 'components/sharepear/sharepear.html'
})

export class Sharepear {
  constructor() {
    console.log('component sharepear mounted');
  }
}
