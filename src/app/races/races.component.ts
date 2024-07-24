import { Component } from "@angular/core";
import { RacesService } from "./races.service";
import { ListOfElementsInterface } from "../interface/list.interface";
import { selectNameByLink } from "../functions";

@Component({
  selector: "app-races",
  templateUrl: "./races.component.html",
  styleUrls: ["./races.component.scss"],
})
export class RacesComponent {
  constructor(private raceService: RacesService) {}

  raceListData!: ListOfElementsInterface | null;
  selectedRaceName: string = "human";
  showRaceList: boolean = false;

  getRaceList() {
    this.raceService.getAllRaces().subscribe({
      next: (data) => (
        (this.raceListData = data), console.log("Data:", this.raceListData)
      ),
      error: (error) => console.log("Error", error),
    });
  }

  ngOnInit(): void {
    this.getRaceList();
  }

  select(url: string) {
    const lastSegment = url.split("/").pop() || "";
    const decoded = decodeURIComponent(lastSegment);
    const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
    this.selectedRaceName = formatted;
    this.showRaceList = !this.showRaceList;
  }
}
