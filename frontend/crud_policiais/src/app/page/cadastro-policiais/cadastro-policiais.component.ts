import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PoliciaisService, Policiais } from '../../service/policiais.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-policiais',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-policiais.component.html',
  styleUrls: ['./cadastro-policiais.component.css'],
})
export class CadastroPoliciaisComponent {
  policial: Policiais = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: '' };
  editando = false;
  cpfInvalido = false;

  constructor(private service: PoliciaisService, private router: Router) {}

  

  create() {
   if (
    !this.policial.rg_civil ||
    !this.policial.rg_militar ||
    !this.policial.cpf ||
    !this.policial.data_nascimento ||
    !this.policial.matricula
  ) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

   const cpfNumeros = this.policial.cpf.replace(/\D/g, '');
  
  if (cpfNumeros.length !== 11) {
    alert("CPF inválido! Deve conter exatamente 11 números.");
    return;
  }

    this.service.createPoliciais(this.policial).subscribe(() => {
      // limpa o formulário
      this.policial = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: '' };
      // redireciona para a tabela de policiais
      this.router.navigate(['/']);
    }, (error) => {
      console.error("Erro ao cadastrar policial:", error);
    });
  }
}
