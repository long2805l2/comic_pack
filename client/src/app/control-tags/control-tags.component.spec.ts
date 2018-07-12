import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTagsComponent } from './control-tags.component';

describe('ControlTagsComponent', () => {
  let component: ControlTagsComponent;
  let fixture: ComponentFixture<ControlTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
