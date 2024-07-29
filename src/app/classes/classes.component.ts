import { Component, OnInit } from "@angular/core";
import { ClassesService } from "./classes.service";
import { BehaviorSubject, switchMap } from "rxjs";
import { ClassInterface } from "./classes.interface";
import { classes } from "./classes.filler.data";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"],
})
export class ClassesComponent implements OnInit {
  classes: { name: string; backgroundImageUrl: string; text: string }[] = [];

  classNames = classes;

  ngOnInit() {
    this.classNames.sort();
    this.classes = this.classNames.map((className) => ({
      name: className.name,
      text: className.text,
      backgroundImageUrl: `url("../../assets/images/class/${className.name}.png")`,
    }));
  }
}
