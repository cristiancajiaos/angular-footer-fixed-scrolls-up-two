import { LayoutComponent } from './layout/layout.component';
import { FooComponent } from './foo/foo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "foo",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: FooComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
