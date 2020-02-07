import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/components.module").then(
        mod => mod.ComponentsModule
      )
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./components/auth/authentication.module").then(
        mod => mod.AuthenticationModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
