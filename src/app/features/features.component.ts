import { Component } from "@angular/core";
import { FeaturesService } from "./features.service";
import {
  ListInterface,
  ListOfElementsInterface,
} from "../interface/list.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent {
  constructor(
    private featuresService: FeaturesService,
    private router: Router
  ) {}

  featureDataList!: ListOfElementsInterface | null;
  selectedFeatureName: string = "";
  showFeatureList: boolean = true;
  filteredResults: ListInterface[] = [];
  searchTerm: string = "";

  ngOnInit(): void {
    this.getFeatureList();
  }

  getFeatureList() {
    this.featuresService.getAllFeaturesList().subscribe({
      next: (data) => (
        (this.featureDataList = data),
        this.checkFeatureListOnDuplication(),
        console.log("Feature list", data)
      ),
      error: (error) => console.log("Error in Feature list", error),
    });
  }

  checkFeatureListOnDuplication() {
    if (!this.featureDataList) return;

    const featureNames = new Set<string>();

    this.featureDataList.results.forEach((feature) => {
      if (!featureNames.has(feature.name)) {
        featureNames.add(feature.name);
        this.filteredResults.push(feature as never);
      }
    });

    this.featureDataList.results = this.filteredResults;
  }

  selectFeature(url: string): void {
    const lastSegment = url.split("/").pop() || "";
    const decoded = decodeURIComponent(lastSegment);
    const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
    this.selectedFeatureName = formatted;
    this.router.navigate([`/features/${this.selectedFeatureName}`]);
  }

  searchByName() {
    if (!this.featureDataList) return console.log("No data found");

    this.filteredResults = this.featureDataList.results.filter((feature) =>
      feature.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
