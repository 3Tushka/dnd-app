import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ClassFeaturesResponseInterface,
  ClassInterface,
  SpellcastingInterface,
} from './classes.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private baseUrl = 'https://www.dnd5eapi.co/api/classes/';

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
}
