import { Component, Input, signal, SimpleChanges } from "@angular/core";
import { RacesService } from "../races.service";
import { RaceData, RaceInterface } from "./race.interface";
import { raceDataFiller } from "./race.data.filler";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-race",
  templateUrl: "./race.component.html",
  styleUrls: ["./race.component.scss"],
})
export class RaceComponent {
  raceName!: string;
  raceData!: RaceInterface | null;
  raceDataBookFiller: RaceData[] = raceDataFiller;
  imagePath!: string;

  readonly panelOpenState = signal(false);

  constructor(
    private raceService: RacesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.raceName = params["id"];
    });

    this.checkIfRaceSame((matchedRace) => {
      console.log("Matched Race Data:", matchedRace);
      this.raceDataBookFiller = [matchedRace]; //wtf did i wrote. But its works o/
    });

    this.getRaceDetails(this.raceName);
    this.getPronfeciencyForRace(this.raceName);
    this.getTraitsForRace(this.raceName);
    this.setImagePath(this.raceName);
  }

  getRaceDetails(raceIndex: string) {
    this.raceService.getRaceByIndex(raceIndex).subscribe({
      next: (data) => {
        this.raceData = data;
        console.log("Data:", this.raceData);
      },
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

  checkIfRaceSame(onMatchFound: (race: any) => void) {
    const matchedRace = this.raceDataBookFiller.find(
      (race) => race.id === this.raceName
    );
    if (matchedRace) {
      console.log(`Match found for raceName: ${this.raceName}`);
      onMatchFound(matchedRace);
    } else {
      console.log(`No match found for raceName: ${this.raceName}`);
    }
  }

  getRandomBackgroundSize(): string {
    const size = Math.floor(Math.random() * 50) + 150;
    return `${size}%`;
  }
}
