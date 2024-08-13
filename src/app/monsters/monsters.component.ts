import { Component } from "@angular/core";
import { MonstersService } from "./monsters.service";
import { MonsterInterface } from "./monster.interface";
import { ListOfElementsInterface } from "../interface/list.interface";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-monsters",
  templateUrl: "./monsters.component.html",
  styleUrls: ["./monsters.component.scss"],
})
export class MonstersComponent {
  constructor(
    private monsterService: MonstersService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      name: ["a"],
    });
  }

  monsterDataList!: ListOfElementsInterface | null;
  monsterDetails: MonsterInterface[] = [];

  selectMonsterName: string = "a";
  searchForm!: FormGroup;

  showMonsterList: boolean = false;
  showFilteredMonsterList: boolean = true;
  count: number = 0;
  filteredMonsters: MonsterInterface[] = [];

  ngOnInit(): void {
    this.getAllMonstersList();
    this.searchByName();
  }

  getAllMonstersList() {
    this.monsterService.getAllMonsters().subscribe({
      next: (data) => {
        this.monsterDataList = data;
        this.monsterDetails = this.monsterDetails;
        console.log("Data:", this.monsterDataList);

        for (let i = 0; i < this.monsterDataList.count; i++) {
          this.getMonsterDetails(this.monsterDataList.results[i].index);
        }

        setTimeout(() => {
          console.log("Monster Details:", this.monsterDetails);
        }, 10000);
      },
      error: (error) => console.log("Error in Monster list", error),
    });
  }

  getMonsterDetails(index: string) {
    this.monsterService.getMonsterByIndex(index).subscribe({
      next: (data) => {
        this.monsterDetails.push(data);
      },
      error: (error) => console.log("Error in Monster details", error),
    });
  }

  selectMonster(url: string): void {
    const lastSegment = url.split("/").pop() || "";
    const decoded = decodeURIComponent(lastSegment);
    const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
    this.selectMonsterName = formatted;
    this.showMonsterList = !this.showMonsterList;
    console.log("Formatted Link: ", this.selectMonsterName);
  }

  searchByName() {
    const { name } = this.searchForm.value;

    this.filteredMonsters =
      this.monsterDetails.filter((monster) => {
        return !name || monster.name.toLowerCase().includes(name.toLowerCase());
      }) || [];
    this.count = this.filteredMonsters.length;
    console.log("Filtered Monsters count:", this.count);
    console.log("Filtered Monsters:", this.filteredMonsters);
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log("Form Submitted", this.searchForm.value);
      this.searchByName();
    }
  }
}
