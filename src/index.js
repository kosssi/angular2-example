import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'yeoman'
})

@Template({
  url: 'yeoman.html'
})

class Yeoman {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(Yeoman);
}
