import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListOfElementsInterface } from "../../interface/list.interface";
import { fetchApi } from "../../sharing/functions";
import { RaceInterface } from "./race/race.interface";

@Injectable({
  providedIn: "root",
})
export class RacesService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getAllRaces() {
    const apiUrl = `${this.baseUrl}races`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }

  getRaceByIndex(raceIndex: string) {
    return fetchApi<RaceInterface>(this.http, this.baseUrl, "races", raceIndex);
  }

  getSubracesForRace(raceIndex: string) {
    const apiUrl = `${this.baseUrl}races/${raceIndex}/subraces`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }

  getProfeciencyForRace(raceIndex: string) {
    const apiUrl = `${this.baseUrl}races/${raceIndex}/proficiencies`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }

  getTraitsForRace(raceIndex: string) {
    const apiUrl = `${this.baseUrl}races/${raceIndex}/traits`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }
}
