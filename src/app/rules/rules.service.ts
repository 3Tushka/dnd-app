import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MechanicsInterface } from "../mechanics/mechanics.interface";

@Injectable({
  providedIn: "root",
})
export class RulesService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  private fetchFromApi(endpoint: string, name: string) {
    const apiUrl = `${this.baseUrl}${endpoint}/${name}`;
    return this.http.get<MechanicsInterface>(apiUrl);
  }

  getRules(rulesName: string) {
    return this.fetchFromApi("rule-sections", rulesName);
  }

  getOneRule(ruleName: string) {
    return this.fetchFromApi("rules", ruleName);
  }
}
