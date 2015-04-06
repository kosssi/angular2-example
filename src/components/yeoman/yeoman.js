import {Component, Template} from 'angular2/angular2';
import {Sharepear} from 'components/sharepear/sharepear';
import {Inject} from 'angular2/di';

@Component({
  selector: 'yeoman'
})

@Template({
  url: 'components/yeoman/yeoman.html'
})

export class Yeoman {
  constructor(@Inject(Sharepear)sharepear:Sharepear) {
    console.log('component yeoman mounted');
    this.name = 'sharepear';
  }
}
