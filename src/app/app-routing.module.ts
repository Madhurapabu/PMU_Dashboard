import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashComponent } from './maindash/maindash.component';
import { VoltageComponent } from './voltage/voltage.component';
import { CurrentComponent } from './current/current.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { RocofComponent } from './rocof/rocof.component';
import { GpsComponent } from './gps/gps.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, CanDeactivateGuard } from './auth.guard';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"home",component:AuthenticatedComponent,
   canActivateChild:[AuthGuard],canDeactivate:[CanDeactivateGuard],
   children:[
    {path:"main",component:MaindashComponent},
    {path:"voltage",component:VoltageComponent},
    {path:"current",component:CurrentComponent},
    {path:"frequency",component:FrequencyComponent},
    {path:"rocof",component:RocofComponent},
    {path:"gps",component:GpsComponent}
   ]
   
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
