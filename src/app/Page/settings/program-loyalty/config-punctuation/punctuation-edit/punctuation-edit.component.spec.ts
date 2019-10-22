import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctuationEditComponent } from './punctuation-edit.component';

describe('PunctuationEditComponent', () => {
  let component: PunctuationEditComponent;
  let fixture: ComponentFixture<PunctuationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunctuationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunctuationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
