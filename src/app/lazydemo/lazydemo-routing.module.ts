import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazydemoComponent } from './lazydemo.component';

const routes: Routes = [{ path: '', component: LazydemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazydemoRoutingModule { }
