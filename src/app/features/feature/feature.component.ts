import { Component, Input, SimpleChanges } from "@angular/core";
import { FeaturesService } from "../features.service";
import { FeatureByIndexInterface } from "../features.interface";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})
export class FeatureComponent {
  @Input() featureName!: string;

  constructor(private featureService: FeaturesService) {}

  featureData!: FeatureByIndexInterface | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["featureName"]) {
      this.getFeatureByIndex(this.featureName);
    }
  }

  getFeatureByIndex(name: string) {
    this.featureService.getFeatureByIndex(name).subscribe({
      next: (data) => {
        this.featureData = data;
        console.log("Data by index: ", this.featureData);
      },
      error: (error) => console.log("ERROR: ", error),
    });
  }
}
