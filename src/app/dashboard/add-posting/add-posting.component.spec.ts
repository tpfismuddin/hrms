import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostingComponent } from './add-posting.component';

describe('AddPostingComponent', () => {
  let component: AddPostingComponent;
  let fixture: ComponentFixture<AddPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
