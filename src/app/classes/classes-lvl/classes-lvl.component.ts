import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ClassesService } from '../classes.service';
import { ClassLevelInterface } from '../classes.interface';

@Component({
  selector: 'app-classes-lvl',
  templateUrl: './classes-lvl.component.html',
  styleUrls: ['./classes-lvl.component.scss'],
})
export class ClassesLvlComponent {
  constructor(private classService: ClassesService) {}

  @Input() currentClass!: BehaviorSubject<string>;
  levelInput: number = 1;
  levelClassData!: any | null;
  levelClassDetailsData!: any | null;

  getClassLevels() {
    this.classService.getClassesLevels(this.currentClass.value).subscribe(
      (data) => {
        this.levelClassData = data;
        console.log('Level data: ', this.levelClassData);
      },
      (error) => {
        console.log('Error in API level: ', error);
      }
    );
  }

  getClassLevelDetails(level: number) {
    this.classService
      .getClassLevelDetails(this.currentClass.value, level)
      .subscribe(
        (data) => {
          this.levelClassDetailsData = data;
          console.log('LevelClass', this.levelClassDetailsData);
        },
        (error) => {
          console.log('Error in API: ', error);
        }
      );
  }
}
