import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.less"],
})
export class ComponentsComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }


}
