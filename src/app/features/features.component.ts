import { Component } from "@angular/core";
import { FeaturesService } from "./features.service";
import { ListOfElementsInterface } from "../interface/list.interface";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent {
  constructor(private featuresService: FeaturesService) {}

  featureDataList!: ListOfElementsInterface | null;
  selectedFeatureName: string = "";
  showFeatureList: boolean = true;

  ngOnInit(): void {
    this.getFeatureList();
  }

  getFeatureList() {
    this.featuresService.getAllFeaturesList().subscribe({
      next: (data) => (
        (this.featureDataList = data),
        console.log("Data:", this.featureDataList)
      ),
      error: (error) => console.log("Error in Feature list", error),
    });
  }

  selectFeature(url: string): void {
    const lastSegment = url.split("/").pop() || "";
    const decoded = decodeURIComponent(lastSegment);
    const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
    this.selectedFeatureName = formatted;
    this.showFeatureList = !this.showFeatureList;
    console.log("Formatted Link: ", this.selectedFeatureName);
  }
}
