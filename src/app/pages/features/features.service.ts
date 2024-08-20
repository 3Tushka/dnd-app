import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { fetchApi } from "../../sharing/functions";
import { FeatureByIndexInterface } from "./features.interface";
import { ListOfElementsInterface } from "../../interface/list.interface";

@Injectable({
  providedIn: "root",
})
export class FeaturesService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getAllFeaturesList() {
    const apiUrl = `${this.baseUrl}features`;
    return this.http.get<ListOfElementsInterface>(apiUrl);
  }

  getFeatureByIndex(featureIndex: string) {
    return fetchApi<FeatureByIndexInterface>(
      this.http,
      this.baseUrl,
      "features",
      featureIndex
    );
  }
}
