import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { UpdateWeaponComponent } from './update-weapon/update-weapon.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'weapons', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},

  {path: 'weapons', component: WeaponListComponent},
  {path: 'create-weapon', component: CreateWeaponComponent},
  {path: 'update-weapon/:id', component: UpdateWeaponComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
