import { Component, ElementRef, ViewChild } from "@angular/core";
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

  //pagination
  @ViewChild("paginationBubbles") paginationBubbles!: ElementRef;

  currentPage: number = 1;
  itemsPerPage: number = 10;
  paginatedResults: ListInterface[] = [];

  ngOnInit(): void {
    this.getFeatureList();
  }

  getFeatureList() {
    this.featuresService.getAllFeaturesList().subscribe({
      next: (data) => {
        this.featureDataList = data;
        this.checkFeatureListOnDuplication();
        this.updatePaginatedResults();
      },
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

    this.updatePaginatedResults();
  }

  updatePaginatedResults() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedResults = this.filteredResults.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedResults();
    this.scrollToActiveBubble();
  }

  scrollToActiveBubble() {
    const activeBubble =
      this.paginationBubbles.nativeElement.querySelector(".active");
    if (activeBubble) {
      activeBubble.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredResults.length / this.itemsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
