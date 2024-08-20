import { Component, OnInit } from "@angular/core";
import { MechanicsInterface } from "./mechanics.interface";
import { MechanicsService } from "./mechanics.service";

@Component({
  selector: "app-mechanics",
  templateUrl: "./mechanics.component.html",
  styleUrls: ["./mechanics.component.scss"],
})
export class MechanicsComponent implements OnInit {
  buttonsDamageTypes = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
  ];

  buttonsConditionsTypes = [
    "Blinded",
    "Charmed",
    "Deafened",
    "Exhaustion",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious",
  ];

  buttonsMagicSchools = [
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation",
  ];

  constructor(private mechanicsService: MechanicsService) {}

  mechanicsData!: MechanicsInterface | null;
  showMechanics: boolean = false;
  showDamage: boolean = false;
  showMagic: boolean = false;

  showMechanicsData: boolean = false;

  ngOnInit() {
    this.getMechanicsData("");
  }

  private handleData(data: MechanicsInterface) {
    if (typeof data.desc === "string") {
      data.desc = [data.desc];
    }
    this.mechanicsData = data;
  }

  private handleError(error: any) {
    console.log("Error in API: ", error);
  }

  getMechanicsData(condition: string) {
    this.mechanicsService.getConditions(condition).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getDamageTypesData(damageType: string) {
    this.mechanicsService.getDamageTypes(damageType).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getMagicSchoolsData(magicSchool: string) {
    this.mechanicsService.getMagicSchools(magicSchool).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  setMechanicCondition(condition: string) {
    this.getMechanicsData(condition);
  }

  setDamageTypeCondition(damageTypeCondition: string) {
    this.getDamageTypesData(damageTypeCondition);
  }

  setMagicSchoolCondition(magicSchoolCondition: string) {
    this.getMagicSchoolsData(magicSchoolCondition);
  }

  toggleSection(section: "mechanics" | "damage" | "magic") {
    this.showMechanics = section === "mechanics" ? !this.showMechanics : false;
    this.showDamage = section === "damage" ? !this.showDamage : false;
    this.showMagic = section === "magic" ? !this.showMagic : false;
    this.mechanicsData = null;
  }

  setActiveButton(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const isActive = target.classList.contains("active");

    const buttons = document.querySelectorAll(".mechanics__controls-button");
    buttons.forEach((button) => button.classList.remove("active"));

    if (!isActive) {
      target.classList.add("active");
      this.showMechanicsData = true;
    } else {
      // Reset section states if the button is clicked twice
      this.showMechanics = false;
      this.showDamage = false;
      this.showMagic = false;
    }
  }
}
