import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Equipment,
  EquipmentCategoryItem,
  MagicItem,
} from "./equipment.interface";

import { fetchApi } from "../../sharing/functions";

@Injectable({
  providedIn: "root",
})
export class EquipmentService {
  private baseUrl = "https://www.dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  getAllEquipment() {
    return this.http.get<Equipment[]>(`${this.baseUrl}equipment`);
  }

  getEquipmentByIndex(equipmentIndex: string) {
    return fetchApi<Equipment>(
      this.http,
      this.baseUrl,
      "equipment",
      equipmentIndex
    );
  }

  getEquipmentCategories(equipmentCategoriesName: string) {
    return fetchApi<EquipmentCategoryItem>(
      this.http,
      this.baseUrl,
      "equipment-categories",
      equipmentCategoriesName
    );
  }

  getMagicItems(magicItemsName: string) {
    return fetchApi<MagicItem>(
      this.http,
      this.baseUrl,
      "magic-items",
      magicItemsName
    );
  }

  // getWeaponProperties(weaponPropertiesName: string) {
  //   return fetchApi<Equipment>(
  //     this.http,
  //     this.baseUrl,
  //     "weapon-properties",
  //     weaponPropertiesName
  //   );
  // }
}
