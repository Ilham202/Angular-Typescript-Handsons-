import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import {EditEmpReactiveComponent} from './edit-emp-reactive/edit-emp-reactive.component';

const routes: Routes = [{path:'view-emp',component:ViewEmpComponent},
                        {path:'edit-emp',component:EditEmpComponent},
                        {path:'edit-emp-template-driven',component:EditEmpTemplateDrivenComponent},
                        {path:'edit-emp-reactive',component:EditEmpReactiveComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
