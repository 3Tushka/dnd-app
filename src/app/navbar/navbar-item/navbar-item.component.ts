import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navbar-item",
  templateUrl: "./navbar-item.component.html",
  styleUrls: ["./navbar-item.component.scss"],
})
export class NavbarItemComponent {
  @Input({ required: true }) link!: string;
  @Input({ required: true }) title!: string;
}
