import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "ana@gmail.com"}
  ]

  constructor() {
    // Obter dados local storage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =
      // Usar JSON.parse se for STRING → para → OBJETO
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
    this.contatos = contatosLocalStorage || null;

    // Salvar os contatos no local storage
      // Usar JSON.stringfy se for OBJETO → para → STRING
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
