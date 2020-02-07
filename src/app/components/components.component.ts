import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.less"],
})
export class ComponentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  isCollapsed = false;
  visible = false;
  placement = "left";
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
