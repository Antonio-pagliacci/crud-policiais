import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciaisService, Policiais } from '../../service/policiais.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-tabela-policiais',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tabela-policiais.component.html',
  styleUrl: './tabela-policiais.component.css'
})
export class TabelaPoliciaisComponent implements OnInit{
  constructor(private service: PoliciaisService){}
ngOnInit(): void {
  this.listar();
}
policiais: Policiais[] = [];
policial: Policiais = { rg_civil: '', rg_militar: '', cpf: '', data_nascimento: '', matricula: ''}

listar(){
  this.service.getPoliciais().subscribe((data => (this.policiais = data)))
}
}
