import { Routes } from '@angular/router';
import { LoginandregisterComponent } from './loginandregister/loginandregister.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    { path: "login", component: LoginandregisterComponent}
];
