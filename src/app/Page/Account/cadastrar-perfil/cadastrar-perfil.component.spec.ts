import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPerfilComponent } from './cadastrar-perfil.component';

describe('CadastrarPerfilComponent', () => {
  let component: CadastrarPerfilComponent;
  let fixture: ComponentFixture<CadastrarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
