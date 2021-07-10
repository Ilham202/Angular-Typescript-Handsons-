import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';

const routes: Routes = [{path:'view-emp',component:ViewEmpComponent},
                        {path:'edit-emp',component:EditEmpComponent},
                        {path:'edit-emp-template-driven',component:EditEmpTemplateDrivenComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }