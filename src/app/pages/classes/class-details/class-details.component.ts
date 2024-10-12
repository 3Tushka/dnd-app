import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClassesService } from "../classes.service";
import { ClassInterface } from "../classes.interface";
import { BehaviorSubject } from "rxjs";
import {
  selectNameByLink,
  onClickGoToDetails,
} from "src/app/sharing/functions";
import { Subclass } from "src/app/interface/sublcasses.interface";

@Component({
  selector: "app-class-details",
  templateUrl: "./class-details.component.html",
  styleUrls: ["./class-details.component.scss"],
})
export class ClassDetailsComponent implements OnInit {
  constructor(
    private classService: ClassesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  idOfClass!: string;
  dataOfClass!: ClassInterface | null;
  dataOfSubclasses!: Subclass | null;
  openedItemIndex: number | null = null;
  currentClass = new BehaviorSubject<string>("");

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idOfClass = params["id"];
      this.currentClass.next(this.idOfClass);
    });

    this.getClassDetails();
  }

  getClassDetails() {
    this.classService.getClasses(this.idOfClass).subscribe(
      (data) => {
        this.dataOfClass = data;
        const firstSubclassIndex = this.dataOfClass.subclasses[0]?.index;
        if (firstSubclassIndex !== undefined) {
          this.classService.getClassSubclasses(firstSubclassIndex).subscribe(
            (subData) => {
              this.dataOfSubclasses = subData;
            },
            (subError) => {
              console.error("Error in fetching subclasses: ", subError);
            }
          );
        } else {
          console.warn("No subclasses found.");
        }
      },
      (error) => {
        console.error("Error in API: ", error);
      }
    );
  }

  hasSpellcasting(): boolean {
    return !!this.dataOfClass?.spellcasting;
  }

  navigateTo(url: string) {
    const id = selectNameByLink(url); // Assuming selectNameByLink is also imported
    onClickGoToDetails(this.router, "/details", id);
  }

  toggleAccordion(index: number) {
    this.openedItemIndex = this.openedItemIndex === index ? null : index;
  }
}
