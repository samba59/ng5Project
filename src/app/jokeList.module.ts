import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { AppRootComponent } from './app-root/app-root.component';
import { JokeFormComponent } from './joke-list/joke-form.component';

@NgModule({
  declarations: [
    JokeComponent,
    AppRootComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class JokeListModule { }
