import { Component, OnInit } from "@angular/core";
import { ClassesService } from "./classes.service";
import { BehaviorSubject, switchMap } from "rxjs";
import { ClassInterface } from "./classes.interface";
import { classes } from "./classes.filler.data";
import { Router } from "@angular/router";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"],
})
export class ClassesComponent implements OnInit {
  constructor(private router: Router) {}

  classes: {
    name: string;
    backgroundImageUrl: string;
    text: string;
    logo: string;
  }[] = [];

  classNames = classes;

  ngOnInit() {
    this.classNames.sort();
    this.classes = this.classNames.map((className) => ({
      name: className.name,
      text: className.text,
      logo: `../../assets/images/class-icons/${className.name}.png`,
      backgroundImageUrl: `url("../../assets/images/class/${className.name}.png")`,
    }));
  }

  navigateToClassDetail(className: string) {
    this.router.navigate([`/classes/${className}`]);
  }
}
