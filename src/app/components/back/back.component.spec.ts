import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackComponent } from './back.component';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "../../modules/material/material.module";

fdescribe('BackComponent', () => {
  let component: BackComponent;
  let fixture: ComponentFixture<BackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackComponent],
      imports:[
        MatProgressSpinner,
        NgxSpinnerModule,
        TranslateModule,
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('back ', () => {
 spyOn(component.router , 'navigateByUrl')
    component.back()
    expect(component.router.navigateByUrl).toHaveBeenCalled()
  });
});
