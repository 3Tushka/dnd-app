import { Component, Input, SimpleChanges } from "@angular/core";
import { FeaturesService } from "../features.service";
import { FeatureByIndexInterface } from "../features.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})
export class FeatureComponent {
  constructor(
    private featureService: FeaturesService,
    private route: ActivatedRoute
  ) {}

  featureName!: string | null;
  featureData!: FeatureByIndexInterface | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.featureName = params.get("id") || "";
      this.getFeatureByIndex(this.featureName);
    });
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
