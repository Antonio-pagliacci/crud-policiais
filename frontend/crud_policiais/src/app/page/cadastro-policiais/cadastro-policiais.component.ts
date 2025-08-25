import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoliciaisService, Policiais } from '../../service/policiais.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-policiais',
  imports: [FormsModule],
  templateUrl: './cadastro-policiais.component.html',
  styleUrls: ['./cadastro-policiais.component.css'],
})
export class CadastroPoliciaisComponent {
  policial: Policiais = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: '' };
  editando = false;
  cpfInvalido = false;

  constructor(private service: PoliciaisService, private router: Router) {}

  

  create() {
   

    this.service.createPoliciais(this.policial).subscribe(() => {
      // limpa o formulário
      this.policial = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: '' };
      // redireciona para a tabela de policiais
      this.router.navigate(['/tabela-policiais']);
    }, (error) => {
      console.error("Erro ao cadastrar policial:", error);
    });
  }
}
