import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCadatroComponent } from './pre-cadatro.component';

describe('PreCadatroComponent', () => {
  let component: PreCadatroComponent;
  let fixture: ComponentFixture<PreCadatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCadatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCadatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
