import { Routes } from '@angular/router';
import { TabelaPoliciaisComponent } from './page/tabela-policiais/tabela-policiais.component';
import { CadastroPoliciaisComponent } from './page/cadastro-policiais/cadastro-policiais.component';

export const routes: Routes = [
    {path: '', component: TabelaPoliciaisComponent},
    {path: 'cadastro', component: CadastroPoliciaisComponent}
];
