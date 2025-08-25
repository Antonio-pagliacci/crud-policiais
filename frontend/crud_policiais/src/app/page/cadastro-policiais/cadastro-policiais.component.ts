import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciaisService, Policiais } from '../../service/policiais.service';
import { validarCPF } from './cpf.validator';

@Component({
  selector: 'app-cadastro-policiais',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-policiais.component.html',
  styleUrls: ['./cadastro-policiais.component.css'],
})
export class CadastroPoliciaisComponent {
  policiais: Policiais[] = [];
  policial: Policiais = {
    rg_civil: '',
    rg_militar: '',
    cpf: '',
    data_nascimento: '',
    matricula: '',
  };
  editando = false;
  cpfInvalido = false;

  constructor(private service: PoliciaisService) {}

  validar() {
    this.cpfInvalido = !validarCPF(this.policial.cpf);
    return !this.cpfInvalido;
  }

  create() {
    if (!this.validar()) return;

    this.service.createPoliciais(this.policial).subscribe(() => {
      this.policial = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: '' };
    });
  }
}
