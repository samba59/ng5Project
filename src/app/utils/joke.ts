import { Injectable} from '@angular/core';

@Injectable()
export class Joke {
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