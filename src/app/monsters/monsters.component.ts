import { Component } from "@angular/core";
import { MonstersService } from "./monsters.service";
import { MonsterInterface } from "./monster.interface";
import { ListOfElementsInterface } from "../interface/list.interface";

@Component({
  selector: "app-monsters",
  templateUrl: "./monsters.component.html",
  styleUrls: ["./monsters.component.scss"],
})
export class MonstersComponent {
  constructor(private monsterService: MonstersService) {}

  monsterDataList!: ListOfElementsInterface | null;
  selectMonsterName: string = "adult-brass-dragon";
  showMonsterList: boolean = false;

  ngOnInit(): void {
    this.getAllMonstersList();
  }

  getAllMonstersList() {
    this.monsterService.getAllMonsters().subscribe({
      next: (data) => (
        (this.monsterDataList = data),
        console.log("Data:", this.monsterDataList)
      ),
      error: (error) => console.log("Error in Monster list", error),
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
}
