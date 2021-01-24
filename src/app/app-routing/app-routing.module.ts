import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CoversComponent} from '../covers/covers.component'

const routes: Routes = [
  { path: "", component: CoversComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
