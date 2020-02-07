import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzCardModule } from "ng-zorro-antd/card";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NzResultModule } from "ng-zorro-antd/result";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        NzLayoutModule,
        NgZorroAntdModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzCheckboxModule,
        NzGridModule,
        NzResultModule,
        NzModalModule,
        NzCardModule
    ]
})
export class AuthenticationModule { }
