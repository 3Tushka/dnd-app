import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterInterface } from "./character.interface";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  private fetchFromApi(endpoint: string, name: string) {
    const apiUrl = `${this.baseUrl}${endpoint}/${name}`;
    return this.http.get<CharacterInterface>(apiUrl);
  }

  getAbilityScores(abilityScoresName: string) {
    return this.fetchFromApi("ability-scores", abilityScoresName);
  }

  getAlignments(aligmentsName: string) {
    return this.fetchFromApi("alignments", aligmentsName);
  }

  getBackgrounds(backgroundsName: string) {
    return this.fetchFromApi("backgrounds", backgroundsName);
  }

  getLanguages(languagesName: string) {
    return this.fetchFromApi("languages", languagesName);
  }

  getProficiencies(proficienciesName: string) {
    return this.fetchFromApi("proficiencies", proficienciesName);
  }

  getSkills(skillsName: string) {
    return this.fetchFromApi("skills", skillsName);
  }
}
