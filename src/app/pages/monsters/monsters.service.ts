import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fetchApi } from "../../sharing/functions";
import { MonsterInterface } from "./monster.interface";
import { ListOfElementsInterface } from "../../interface/list.interface";

@Injectable({
  providedIn: "root",
})
export class MonstersService {
  public baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getAllMonsters() {
    const apiUrl = `${this.baseUrl}monsters`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }

  getMonsterByIndex(monsterIndex: string) {
    return fetchApi<MonsterInterface>(
      this.http,
      this.baseUrl,
      "monsters",
      monsterIndex
    );
  }
}
