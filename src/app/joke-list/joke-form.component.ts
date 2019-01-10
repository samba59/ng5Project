import { Component, Output, EventEmitter } from '@angular/core';

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
  selector: 'joke-form',
  template: `
  <div class="card card-block">
  <h4 class="card-title">Create Joke!</h4>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Joke" #joke/>
  </div>
  <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter punch line" #punchline/>
  </div>
  <button type="button" class="btn btn-primary" (click)="createJoke(joke.value, punchline.value)">
    Create Joke
  </button>
</div>
  `
})
export class JokeFormComponent  {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(joke: String, punchline: String) {
    this.jokeCreated.emit(new Joke(joke, punchline));
  }

}