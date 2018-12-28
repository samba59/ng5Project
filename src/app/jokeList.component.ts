import { Component } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './jokeList.component.html',
  styleUrls: ['./jokeList.component.css']
})
export class JokeComponentList {
  //heading : String;
  //tagLine : String;
  title = 'Jokes List';
  jokeList : Object[];

  constructor(){
    this.jokeList = [
        {
          heading: "What did the cheese say when it looked in the mirror?",
          tagLine: "Hello-Me (Halloumi)"
        },
        {
          heading: "What kind of cheese do you use to disguise a small horse?",
          tagLine: "Mask-a-pony (Mascarpone)"
        },
        {
          heading: "A kid threw a lump of cheddar at me",
          tagLine: "I thought ‘That’s not very mature’"
        }
    ];
  }
}
