import { Component, OnInit } from "@angular/core";
import { EquipmentService } from "./equipment.service";
import {
  Equipment,
  EquipmentAllCall,
  EquipmentCategoryItem,
  MagicItem,
} from "./equipment.interface";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
  constructor(private equipmenetService: EquipmentService) {}

  equipmentData!: Equipment | null;
  equipmentCategoryData!: EquipmentCategoryItem | null;
  magicItemData!: MagicItem | null;
  allEquipment?: EquipmentAllCall;

  equipmentIndex!: string;
  searchTerm: string = "";
  selectedCategory: string = "";

  knownCategories = [
    "adventuring-gear",
    "ammunition",
    "arcane-foci",
    "armor",
    "artisans-tools",
    "druidic-foci",
    "equipment-packs",
    "gaming-sets",
    "heavy-armor",
    "holy-symbols",
    "kits",
    "land-vehicles",
    "light-armor",
    "martial-melee-weapons",
    "martial-ranged-weapons",
    "martial-weapons",
    "medium-armor",
    "melee-weapons",
    "mounts-and-other-animals",
    "mounts-and-vehicles",
    "musical-instruments",
    "other-tools",
    "potion",
    "ranged-weapons",
    "ring",
    "rod",
    "scroll",
    "shields",
    "simple-melee-weapons",
    "simple-ranged-weapons",
    "simple-weapons",
    "staff",
    "standard-gear",
    "tack-harness-and-drawn-vehicles",
    "tools",
    "wand",
    "waterborne-vehicles",
    "weapon",
    "wondrous-items",
  ];

  ngOnInit() {
    this.getAllEquipment();
  }

  getAllEquipment() {
    this.equipmenetService.getAllEquipment().subscribe((data) => {
      this.allEquipment = data;
      console.log("All data:", this.allEquipment);
    });
  }

  getEquipmentByIndex(equipmentIndex: string) {
    this.equipmenetService
      .getEquipmentByIndex(equipmentIndex)
      .subscribe((data) => {
        this.equipmentData = data;
        console.log(data);
      });
  }

  getEquipmentCategories(equipmentCategoriesName: string) {
    this.equipmenetService
      .getEquipmentCategories(equipmentCategoriesName)
      .subscribe((data) => {
        this.equipmentCategoryData = data;
        console.log("Category items", this.equipmentCategoryData);
      });
  }

  getMagicItems(magicItemsName: string) {
    this.equipmenetService.getMagicItems(magicItemsName).subscribe((data) => {
      this.magicItemData = data;
      console.log(data);
    });
  }

  getWeaponProperties(weaponPropertiesName: string) {
    this.equipmenetService
      .getWeaponProperties(weaponPropertiesName)
      .subscribe((data) => {
        this.equipmentData = data;
        console.log(data);
      });
  }

  isCategory(term: string): boolean {
    return this.knownCategories.includes(term.toLowerCase());
  }

  searchEquipment() {
    this.searchTerm = this.searchTerm.toLocaleLowerCase().replace(/\s+/g, "-");
    if (!this.searchTerm || this.searchTerm === "all") {
      this.getAllEquipment();
      return;
    }

    if (this.isCategory(this.searchTerm)) {
      this.getEquipmentCategories(this.searchTerm);
    } else {
      this.getEquipmentByIndex(this.searchTerm);
    }
  }

  setSearchTermAndSearch(name: string) {
    this.searchTerm = name.toLocaleLowerCase().replace(/\s+/g, "-");
    this.searchEquipment();
  }

  filterByCategory() {
    if (this.selectedCategory) {
      this.searchTerm = this.selectedCategory;
      this.getEquipmentCategories(this.selectedCategory);
    } else {
      this.getAllEquipment();
    }
  }
}
