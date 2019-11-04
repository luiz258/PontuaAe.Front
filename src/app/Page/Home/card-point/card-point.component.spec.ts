import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPointComponent } from './card-point.component';

describe('CardPointComponent', () => {
  let component: CardPointComponent;
  let fixture: ComponentFixture<CardPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
