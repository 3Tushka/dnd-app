import { Component, OnInit } from "@angular/core";
import { ClassesService } from "./classes.service";
import { BehaviorSubject, switchMap } from "rxjs";
import { ClassInterface } from "./classes.interface";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"],
})
export class ClassesComponent implements OnInit {
  currentClass = new BehaviorSubject<string>("");

  ngOnInit() {}

  selectClass(className: string) {
    this.currentClass.next(className);
  }
}
