import { Routes } from '@angular/router';
import { UserdetailsComponent } from './usersdetail/userdetails.component';
import { LoginComponent } from './component/login/login.component';


export const routes: Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:UserdetailsComponent},
];
