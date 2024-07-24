import { Component, Input, SimpleChanges } from "@angular/core";
import { RacesService } from "../races.service";
import { RaceInterface } from "./race.interface";

@Component({
  selector: "app-race",
  templateUrl: "./race.component.html",
  styleUrls: ["./race.component.scss"],
})
export class RaceComponent {
  @Input() raceName!: string;

  constructor(private raceService: RacesService) {}

  raceData!: RaceInterface | null;
  imagePath!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["raceName"]) {
      this.getRaceDetails(this.raceName);
      this.getPronfeciencyForRace(this.raceName);
      this.getTraitsForRace(this.raceName);
      this.setImagePath(this.raceName);
    }
  }

  getRaceDetails(raceIndex: string) {
    this.raceService.getRaceByIndex(raceIndex).subscribe({
      next: (data) => (
        (this.raceData = data), console.log("Data:", this.raceData)
      ),
      error: (error) => console.log("Error", error),
    });
  }

  getPronfeciencyForRace(raceIndex: string) {
    this.raceService.getProfeciencyForRace(raceIndex).subscribe({
      next: (data) => console.log("Profeciency:", data),
      error: (error) => console.log("Error", error),
    });
  }

  getTraitsForRace(raceIndex: string) {
    this.raceService.getTraitsForRace(raceIndex).subscribe({
      next: (data) => console.log("Traits:", data),
      error: (error) => console.log("Error", error),
    });
  }

  setImagePath(raceName: string) {
    this.imagePath = `assets/images/race/${raceName}.webp`;
  }
}
