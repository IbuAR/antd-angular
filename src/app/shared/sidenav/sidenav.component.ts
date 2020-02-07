import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.less"]
})
export class SidenavComponent implements OnInit {
    isCollapsed = false;

    constructor(
        private message: NzMessageService
    ) { }

    ngOnInit() { }

}
