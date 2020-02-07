import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsRoutingModule } from "./components-routing.module";
import { ComponentsComponent } from "./components.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { SidenavComponent } from "../shared/sidenav/sidenav.component";
// Zorro Antd
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from "@ant-design/icons-angular/icons";
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
    key => antDesignIcons[key]
);
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
