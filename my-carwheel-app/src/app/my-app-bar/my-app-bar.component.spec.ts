import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppBarComponent } from './my-app-bar.component';

describe('MyAppBarComponent', () => {
  let component: MyAppBarComponent;
  let fixture: ComponentFixture<MyAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
