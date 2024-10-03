import { Component, signal } from "@angular/core";
import { SpellsService } from "./spells.service";
import { Spell, SpellsInterface } from "./spells.interface";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { onClickGoToDetails } from "src/app/sharing/functions";

@Component({
  selector: "app-spells",
  templateUrl: "./spells.component.html",
  styleUrls: ["./spells.component.scss"],
})
export class SpellsComponent {
  displayedColumns: string[] = [
    "level",
    "name",
    "casting",
    "duration",
    "range",
    "attack",
    "damage",
  ];

  // some shitty code here

  spellsListData!: SpellsInterface | null;
  spellDetails: Spell[] = [];
  filteredSpells: Spell[] = [];
  searchForm!: FormGroup;
  dataSource = new MatTableDataSource<Spell>();

  readonly panelOpenState = signal(false);

  constructor(
    private spellService: SpellsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      classes: [""],
      name: [""],
      level: [""],
      castingTime: [""],
      spellSchool: [""],
    });
  }

  ngOnInit(): void {
    this.getSpellList();
  }

  getSpellList() {
    this.spellService.getAllSpells().subscribe({
      next: (data) => {
        this.spellsListData = data;
        this.filteredSpells = this.spellDetails;
        console.log("Data:", this.spellsListData);

        for (let i = 0; i < this.spellsListData.count; i++) {
          this.getSpellDetails(this.spellsListData.results[i].index);
        }
      },
      error: (error) => console.log("Error", error),
    });
  }

  getSpellDetails(index: string) {
    this.spellService.getSpellByName(index).subscribe({
      next: (spellData) => {
        this.spellDetails.push(spellData);
      },
      error: (error) => console.log("Error", error),
    });
  }

  onClickSpell(spellId: string) {
    onClickGoToDetails(this.router, "spells", spellId);
  }

  filterSpells() {
    try {
      const { classes, name, level, castingTime, spellSchool } =
        this.searchForm.value;

      this.filteredSpells =
        this.spellDetails.filter((spell) => {
          return (
            (!classes || spell.classes.some((cls) => cls.name === classes)) &&
            (!name || spell.name.toLowerCase().includes(name.toLowerCase())) &&
            (!level || spell.level === level) &&
            (!castingTime ||
              spell.casting_time
                .toLowerCase()
                .includes(castingTime.toLowerCase())) &&
            (!spellSchool ||
              spell.school.name
                .toLowerCase()
                .includes(spellSchool.toLowerCase()))
          );
        }) || [];
      this.dataSource.data = this.filteredSpells;
    } catch (error) {
      console.error("Error filtering spells:", error);
      this.filteredSpells = [];
      this.dataSource.data = this.filteredSpells;
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log("Form Submitted", this.searchForm.value);
      this.filterSpells();
    }
  }

  resetForm() {
    this.searchForm.reset();
    this.dataSource.data = this.spellDetails;
  }
}
