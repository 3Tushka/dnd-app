import { Component } from "@angular/core";
import { RacesService } from "./races.service";
import { ListOfElementsInterface } from "../interface/list.interface";
import { selectNameByLink } from "../sharing/functions";
import { Router } from "@angular/router";

@Component({
  selector: "app-races",
  templateUrl: "./races.component.html",
  styleUrls: ["./races.component.scss"],
})
export class RacesComponent {
  constructor(private raceService: RacesService, private router: Router) {}

  raceListData!: ListOfElementsInterface | null;
  selectedRaceName: string = "";
  showRaceList: boolean = true;

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
    this.router.navigate([`races/${selectNameByLink(url)}`]);
  }
}
