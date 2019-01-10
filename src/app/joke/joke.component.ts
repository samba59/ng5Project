import { Component, Input, EventEmitter, Output } from '@angular/core';

class Joke {
  heading : String;
  tagLine : String;
  hide : boolean;
  constructor(heading: String, tagLine: String){
      this.heading = heading;
      this.tagLine = tagLine;
      this.hide = true;
  }

  toggle() {
      this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteJoke(joke) {
    this.jokeDeleted.emit(joke);
  }
}
