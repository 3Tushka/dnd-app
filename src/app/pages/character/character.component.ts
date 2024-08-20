import { Component } from "@angular/core";
import { CharacterInterface } from "./character.interface";
import { CharacterService } from "./character.service";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"],
})
export class CharacterComponent {
  abilityButtonArray = [
    { id: "str", name: "Strength" },
    { id: "dex", name: "Dexterity" },
    { id: "con", name: "Constitution" },
    { id: "int", name: "Intelligence" },
    { id: "wis", name: "Wisdom" },
    { id: "cha", name: "Charisma" },
  ];

  aligmentButtonArray = [
    { id: "chaotic-neutral", name: "Chaotic Neutral" },
    { id: "chaotic-evil", name: "Chaotic Evil" },
    { id: "chaotic-good", name: "Chaotic Good" },
    { id: "lawful-neutral", name: "Lawful Neutral" },
    { id: "lawful-evil", name: "Lawful Evil" },
    { id: "lawful-good", name: "Lawful Good" },
    { id: "neutral", name: "Neutral" },
    { id: "neutral-evil", name: "Neutral Evil" },
    { id: "neutral-good", name: "Neutral Good" },
  ];

  languageButtonArray = [
    { id: "abyssal", name: "Abyssal" },
    { id: "celestial", name: "Celestial" },
    { id: "common", name: "Celestial" },
    { id: "deep-speech", name: "Deep Speech" },
    { id: "draconic", name: "Draconic" },
    { id: "dwarvish", name: "Dwarvish" },
    { id: "Elvish", name: "Elvish" },
    { id: "giant", name: "Giant" },
    { id: "gnomish", name: "Gnomish" },
    { id: "goblin", name: "Goblin" },
    { id: "halfling", name: "Halfling" },
    { id: "infernal", name: "Internal" },
    { id: "orc", name: "Orc" },
    { id: "primordial", name: "Primordial" },
    { id: "sylvan", name: "Sylvan" },
    { id: "undercommon", name: "Undercommon" },
  ];

  characterData!: CharacterInterface | null;
  character!: string;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getAbilityScore(this.character);
    this.getAlignments(this.character);
    this.getLanguage(this.character);
  }

  private handleData(data: CharacterInterface) {
    this.characterData = data;
  }

  private handleError(error: any) {
    console.log("Error in API: ", error);
  }

  getAbilityScore(characterAblitiy: string) {
    this.characterService.getAbilityScores(characterAblitiy).subscribe({
      next: (data) => {
        console.log("Data received: ", data);
        this.handleData(data);
      },
      error: (error) => this.handleError(error),
    });
  }

  getAlignments(aligment: string) {
    this.characterService.getAlignments(aligment).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getBackground(background: string) {
    this.characterService.getBackgrounds(background).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getLanguage(language: string) {
    this.characterService.getLanguages(language).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getProficiency(proficiency: string) {
    this.characterService.getProficiencies(proficiency).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getSkill(skill: string) {
    this.characterService.getSkills(skill).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }
}
