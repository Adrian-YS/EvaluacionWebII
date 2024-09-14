import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { OrdenesComponent } from './screens/ordenes/ordenes.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { UsuariosComponent } from './screens/usuarios/usuarios.component';
import { privadoGuard } from './guards/privado.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'ordenes', component: OrdenesComponent, canActivate: [privadoGuard]},
    {path: 'registro', component: RegistroComponent},
    {path: 'usuarios', component: UsuariosComponent},

    {path: "**", redirectTo: "", pathMatch: "full"}
];
