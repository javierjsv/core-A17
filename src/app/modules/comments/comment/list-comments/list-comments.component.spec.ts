import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListCommentsComponent } from './list-comments.component';
import {CommentRoutingModule} from "../comment-routing.module";
import {MaterialModule} from "../../../material/material.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ApiService} from "../../../../services/api.service";
import {HelperService} from "../../../../services/helper.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ListPostsComponent} from "../../../posts/components/list-posts/list-posts.component";
import {of} from "rxjs";
import {apiRouters} from "../../../../core/config/apiRouters";

fdescribe('ListCommentsComponent', () => {
  let component: ListCommentsComponent;
  let fixture: ComponentFixture<ListCommentsComponent>;
  let  apiServiceSpy: jasmine.SpyObj<ApiService>;
  let  helperServiceSpy: jasmine.SpyObj<HelperService>;



  beforeEach(waitForAsync(() => {
    apiServiceSpy = jasmine.createSpyObj<ApiService>('ApiService', ['getObs' , 'getPro' , 'deleteObs' , 'postObs' ]);
    helperServiceSpy = jasmine.createSpyObj<HelperService>('HelperService', ['alert' , 'translateService' ,'spinnerHidde' ,'spinnerShow' ]);

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: HelperService, useValue: helperServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('ngOnInit() ', () => {

    spyOn(component,'getComments')
    component.ngOnInit()
    expect(component.getComments).toHaveBeenCalled()

  });

  it('#getpost()', (done) => {

    const post = [
      { title: 'libreo' , body: 'texto' , email:'demo@hormail.com'}
    ] as any;

    apiServiceSpy.getPro.and.resolveTo(of(post))
    component.getComments();
    component.api.getPro(apiRouters.POSTS).then(resp=>{
      done()
    })



  });

  it('#getpost() error ', (done) => {

    let data =
      {
        "mensale": "Error",
      } as any;

    apiServiceSpy.getPro.and.rejectWith(of(data));
    component.getComments()
    component.api.getPro(apiRouters.POSTS).catch(err=>{
      done()
    })

  });


});
