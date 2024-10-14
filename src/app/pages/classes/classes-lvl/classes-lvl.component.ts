import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { ClassesService } from "../classes.service";

@Component({
  selector: "app-classes-lvl",
  templateUrl: "./classes-lvl.component.html",
  styleUrls: ["./classes-lvl.component.scss"],
})
export class ClassesLvlComponent {
  constructor(private classService: ClassesService) {}

  @Input() currentClass!: BehaviorSubject<string>;
  levelInput: number = 1;
  levelClassData!: any | null;
  levelClassDetailsData!: any | null;

  ngOnInit(): void {
    this.getClassLevelDetails(this.levelInput);
  }

  getClassLevels() {
    this.classService.getClassesLevels(this.currentClass.value).subscribe(
      (data) => {
        this.levelClassData = data;
        console.log("Level data: ", this.levelClassData);
      },
      (error) => {
        console.log("Error in API level: ", error);
      }
    );
  }

  getClassLevelDetails(level: number) {
    this.classService
      .getClassLevelDetails(this.currentClass.value, level)
      .subscribe(
        (data) => {
          this.levelClassDetailsData = data;
          console.log("LevelClass", this.levelClassDetailsData);
        },
        (error) => {
          console.log("Error in API: ", error);
        }
      );
  }

  getKeys(obj: any): string[] {
    const keys = Object.keys(obj);
    return keys;
  }

  isObject(value: any): boolean {
    const result = value && typeof value === "object" && !Array.isArray(value);
    return result;
  }

  formatKey(key: string): string {
    const formattedKey = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    if (this.levelClassDetailsData.spellcasting[key] === 0) {
      return "";
    }

    return formattedKey;
  }

  formatValue(key: string) {
    const formattedKey = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return formattedKey;
  }
}
