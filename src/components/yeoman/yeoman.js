import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'yeoman'
})

@Template({
  url: 'components/yeoman/yeoman.html'
})

export class Yeoman {
  constructor() {
    console.log('component mounted');
  }
}
