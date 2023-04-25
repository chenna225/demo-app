import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatecolorComponent } from './datecolor/datecolor.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';


const routes: Routes = [
  { path: 'datecolor', component: DatecolorComponent },
  { path: 'display', component: DisplaydataComponent },
  { path: 'lazydemo', loadChildren: () => import('./lazydemo/lazydemo.module').then(m => m.LazydemoModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
