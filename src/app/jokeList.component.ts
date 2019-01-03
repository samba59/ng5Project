import { Component } from '@angular/core';

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
  templateUrl: './jokeList.component.html',
  styleUrls: ['./jokeList.component.css']
})
export class JokeComponentList {
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
}
