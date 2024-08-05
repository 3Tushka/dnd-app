import { Component } from "@angular/core";
import { SpellsService } from "../spells.service";
import { ActivatedRoute } from "@angular/router";
import { Spell } from "../spells.interface";

@Component({
  selector: "app-spell-detail",
  templateUrl: "./spell-detail.component.html",
  styleUrls: ["./spell-detail.component.scss"],
})
export class SpellDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private spellDetailService: SpellsService
  ) {}

  spellName!: string;
  spellData?: Spell | null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.spellName = params["id"];
    });

    this.getSpellsDetails(this.spellName);
  }

  getSpellsDetails(spellName: string) {
    this.spellDetailService.getSpellByName(spellName).subscribe({
      next: (data) => {
        this.spellData = data;
        console.log("Data:", this.spellData);
      },
      error: (error) => console.log("Error", error),
    });
  }
}
