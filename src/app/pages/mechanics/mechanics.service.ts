import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MechanicsInterface } from "./mechanics.interface";
import { fetchApi } from "../../sharing/functions";

@Injectable({
  providedIn: "root",
})
export class MechanicsService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getConditions(conditionsName: string) {
    return fetchApi<MechanicsInterface>(
      this.http,
      this.baseUrl,
      "conditions",
      conditionsName
    );
  }

  getDamageTypes(damageTypesName: string) {
    return fetchApi<MechanicsInterface>(
      this.http,
      this.baseUrl,
      "damage-types",
      damageTypesName
    );
  }

  getMagicSchools(magicSchoolsName: string) {
    return fetchApi<MechanicsInterface>(
      this.http,
      this.baseUrl,
      "magic-schools",
      magicSchoolsName
    );
  }
}
