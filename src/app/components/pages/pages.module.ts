import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzStatisticModule } from "ng-zorro-antd/statistic";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzListModule } from "ng-zorro-antd/list";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzTreeModule } from "ng-zorro-antd/tree";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ListingsComponent } from './listings/listings.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [
        HomeComponent,
        ListingsComponent,
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgZorroAntdModule,
        NzLayoutModule,
        NzCardModule,
        NzTableModule,
        NzStatisticModule,
        NzGridModule,
        NzSkeletonModule,
        NzProgressModule,
        NzDividerModule,
        NzIconModule,
        NzTabsModule,
        NzTagModule,
        NzToolTipModule,
        NzRadioModule,
        NzSelectModule,
        NzUploadModule,
        NzListModule,
        NzCollapseModule,
        NzDrawerModule,
        NzInputNumberModule,
        NzTreeModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class PagesModule { }
