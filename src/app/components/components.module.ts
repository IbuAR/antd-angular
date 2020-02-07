import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsRoutingModule } from "./components-routing.module";
import { ComponentsComponent } from "./components.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { SidenavComponent } from "../shared/sidenav/sidenav.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        FooterComponent,
        HeaderComponent,
        SidenavComponent,
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        NzLayoutModule,
        NgZorroAntdModule,
        SharedModule
    ],
    exports: []
})
export class ComponentsModule { }
