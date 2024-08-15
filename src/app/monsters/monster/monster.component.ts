import { Component, Input, SimpleChanges } from "@angular/core";
import { MonsterInterface } from "../monster.interface";
import { MonstersService } from "../monsters.service";
import { ActivatedRoute } from "@angular/router"; // Import ActivatedRoute module

@Component({
  selector: "app-monster",
  templateUrl: "./monster.component.html",
  styleUrls: ["./monster.component.scss"],
})
export class MonsterComponent {
  @Input() monsterName!: string;

  constructor(
    private monsterService: MonstersService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {}

  monsterData!: MonsterInterface | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.getMonster(id);
      }
    });
  }

  getMonster(monsterName: string) {
    this.monsterService.getMonsterByIndex(monsterName).subscribe({
      next: (data) => {
        const monster: MonsterInterface = {
          ...data,
          image: `${this.monsterService.baseUrl}images/monsters/${data.index}.png`,
        };
        this.monsterData = monster;
        console.log("Data by index: ", this.monsterData);
      },
      error: (error) => console.log("ERROR: ", error),
    });
  }
}
