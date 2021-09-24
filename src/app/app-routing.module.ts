import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuantityFormComponent } from './components/quantity-form/quantity-form.component';

const routes: Routes = [
  { path: '', component: QuantityFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
