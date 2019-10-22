import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctuationDeleteComponent } from './punctuation-delete.component';

describe('PunctuationDeleteComponent', () => {
  let component: PunctuationDeleteComponent;
  let fixture: ComponentFixture<PunctuationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunctuationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunctuationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
