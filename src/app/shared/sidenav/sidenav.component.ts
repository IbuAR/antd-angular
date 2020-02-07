import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.less"]
})
export class SidenavComponent implements OnInit {
    constructor(
        private message: NzMessageService
    ) { }
    isCollapsed = false;
    ngOnInit() { }
    logOut() {
        this.message.success("Logged out successfully!");
        // this.authService.logOut();
    }
}
