import { Component, OnInit, OnDestroy } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";
import { Subscription } from "rxjs";
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit, OnDestroy {
    userName: any = localStorage.getItem("userName");
    visible2 = false;
    notifySubs: Subscription;
    notifySubsData: Subscription;
    notifications = [];
    notificationsCount = 0;

    planStatus = localStorage.getItem('subscribed') == 'true';
    constructor(
        private auth: AuthService,
        private message: NzMessageService,
    ) { }

    ngOnInit() {

    }

    logout() {
        this.auth.Logout();
        this.message.success('Logged Out!');
    }

    ngOnDestroy() {

    }


}
