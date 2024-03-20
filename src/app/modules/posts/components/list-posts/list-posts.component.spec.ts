import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListPostsComponent } from './list-posts.component';
import {ApiService} from "../../../../services/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HelperService} from "../../../../services/helper.service";
import {TranslateModule} from "@ngx-translate/core";
import {PostsModule} from "../../posts.module";
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import { apiRouters } from "../../../../core/config/apiRouters"

fdescribe('ListPostsComponent', () => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;
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
        PostsModule
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: HelperService, useValue: helperServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('#ngOnInit()', () => {
    spyOn(component ,'getpost');
    component.ngOnInit();
    expect(component.getpost).toHaveBeenCalled()
  });

  it('#getpost()',  function (done) {

    let data = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ]
    apiServiceSpy.getObs.and.returnValue(of(data));
    component.getpost()
    component.api.getObs(apiRouters.POSTS).subscribe({
      next:(resp)=>{
        expect(resp).toBeDefined()
        expect(component.helperService.spinnerHidde).toHaveBeenCalled()
        expect(component.post).toEqual(data);
        done();
      }
    })


  });

  it('#getpost() Error ', function (done) {
       const errorHttpMock = new HttpErrorResponse({
        error: {
          message: 'NOT_FOUND_INFO'
        },
        status: 504,
        statusText: ''
      });

      apiServiceSpy.getObs.and.returnValue(throwError(() => errorHttpMock));

      component.getpost()

      component.api.getObs(apiRouters.POSTS).subscribe({
        error:(err)=>{
             expect(component.helperService.spinnerHidde).toHaveBeenCalled();
             expect(component.helperService.alert).toHaveBeenCalled();
             expect(component.helperService.alert).toHaveBeenCalledWith('ERROR' , 'Hubo un error' , 'error');
          done();
        }
      })

    });

  it('#go', function () {
    spyOn(component.router , 'navigate')
    let id = '1';
    component.go(id)
    expect(component.router.navigate).toHaveBeenCalledWith(['post/detail'], { queryParams: { id } })

  });

});
