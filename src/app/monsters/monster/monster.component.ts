import { Component, Input, SimpleChanges } from "@angular/core";
import { MonsterInterface } from "../monster.interface";
import { MonstersService } from "../monsters.service";

@Component({
  selector: "app-monster",
  templateUrl: "./monster.component.html",
  styleUrls: ["./monster.component.scss"],
})
export class MonsterComponent {
  @Input() monsterName!: string;

  constructor(private monsterService: MonstersService) {}

  monsterData!: MonsterInterface | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["monsterName"]) {
      this.getMonster(this.monsterName);
    }
  }

  getMonster(monsterName: string) {
    this.monsterService.getMonsterByIndex(monsterName).subscribe({
      next: (data) => {
        this.monsterData = data;
        console.log("Data by index: ", this.monsterData);
      },
      error: (error) => console.log("ERROR: ", error),
    });
  }
}
