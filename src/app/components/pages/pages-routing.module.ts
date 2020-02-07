import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ListingsComponent } from './listings/listings.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: HomeComponent
    },
    {
        path: "listings",
        component: ListingsComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
