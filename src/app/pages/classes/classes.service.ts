import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ClassFeaturesResponseInterface,
  ClassInterface,
  ClassLevelInterface,
  SpellcastingInterface,
} from "./classes.interface";
import { Subclass } from "src/app/interface/sublcasses.interface";
import { ClassLevelDetails } from "./classes-lvl/class-lvl.interface";

@Injectable({
  providedIn: "root",
})
export class ClassesService {
  private baseUrl = "https://www.dnd5eapi.co/api/classes/";

  constructor(private http: HttpClient) {}

  getClasses(className: string) {
    const apiUrl = `${this.baseUrl}${className}`;
    return this.http.get<ClassInterface>(apiUrl);
  }

  getSpellCastingForClasses(className: string) {
    const apiUrl = `${this.baseUrl}${className}/spellcasting`;
    return this.http.get<SpellcastingInterface>(apiUrl);
  }

  getFeaturesForClasses(className: string) {
    const apiUrl = `${this.baseUrl}${className}/features`;
    return this.http.get<ClassFeaturesResponseInterface>(apiUrl);
  }

  getClassesLevels(className: string) {
    const apiUrl = `${this.baseUrl}${className}/levels`;
    return this.http.get<ClassLevelInterface>(apiUrl);
  }

  getClassLevelDetails(className: string, level: number) {
    const apiUrl = `${this.baseUrl}${className}/levels/${level}`;
    return this.http.get<ClassLevelDetails>(apiUrl);
  }

  getClassSubclasses(subClassName: string) {
    const apiUrl = `https://www.dnd5eapi.co/api/subclasses/${subClassName}`;
    return this.http.get<Subclass>(apiUrl);
  }
}
