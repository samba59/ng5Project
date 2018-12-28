import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { JokeComponentList } from './jokeList.component';


@NgModule({
  declarations: [
    JokeComponentList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeComponentList]
})
export class JokeListModule { }
