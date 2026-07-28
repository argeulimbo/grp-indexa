import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    NgClass,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome:         new FormControl('', Validators.required),
      telefone:     new FormControl('', Validators.required),
      email:        new FormControl('', [Validators.required, Validators.email]),
      aniversario:  new FormControl(''),
      redes:        new FormControl(),
      observacoes:  new FormControl()
    })
  }

  salvarContato() {
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    }
    else {
      alert('Preencha os dados corretamente!')
    }
  }

  cancelar() {
    this.contatoForm.reset();
    console.log()
  }
}
