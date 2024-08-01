import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fetchApi } from "../functions";
import { Spell, SpellsInterface } from "./spells.interface";

@Injectable({
  providedIn: "root",
})
export class SpellsService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getAllSpells() {
    const apiUrl = `${this.baseUrl}spells`;
    return this.http.get<SpellsInterface>(apiUrl);
  }

  getSpellByName(spellName: string) {
    return fetchApi<Spell>(this.http, this.baseUrl, "spells", spellName);
  }
}
