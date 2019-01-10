import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  //heading : String;
  //tagLine : String;
  title = 'Jokes List';
  jokeList : Joke[];

  constructor(){
    this.jokeList = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  addJoke(joke) {
    this.jokeList.unshift(joke);
  }

  deleteJoke(joke) {
    let jokeEntries = this.jokeList.entries;
    this.jokeList.forEach(element => {
      if(element.heading == joke.heading) {
        this.jokeList.shift();
      }
    });
  }
}

