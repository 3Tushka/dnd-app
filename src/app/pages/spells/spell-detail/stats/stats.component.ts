import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent {
  @Input() label?: string;
  @Input() value?: string[] | string | number | null;
}
