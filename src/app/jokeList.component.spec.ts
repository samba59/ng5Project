import { TestBed, async } from '@angular/core/testing';
import { JokeComponentList } from './jokeList.component';
describe('JokeComponentList', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JokeComponentList
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(JokeComponentList);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(JokeComponentList);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(JokeComponentList);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
