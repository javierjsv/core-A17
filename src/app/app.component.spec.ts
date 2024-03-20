import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";


fdescribe('AppComponent', () => {
  let app : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent ,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should ', () => {
    localStorage.setItem('lang' , 'en');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.initApp()
  });

  it('should ', () => {
    localStorage.removeItem('lang')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.initApp()
  });

});
