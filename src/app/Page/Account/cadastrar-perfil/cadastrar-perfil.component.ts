import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-perfil',
  templateUrl: './cadastrar-perfil.component.html',
  styleUrls: ['./cadastrar-perfil.component.css']
})
export class CadastrarPerfilComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log();
  }


}
