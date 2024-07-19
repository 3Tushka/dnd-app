import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ClassInterface } from './classes.interface';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  currentClass = new BehaviorSubject<string>('bard');
  classData!: ClassInterface | null;

  openedItemIndex: number | null = null;

  constructor(private classesService: ClassesService) {}

  ngOnInit() {
    this.currentClass
      .pipe(switchMap((className) => this.classesService.getClasses(className)))
      .subscribe(
        (data) => {
          this.classData = data;
          console.log(this.classData);
        },
        (error) => {
          console.log('Error in API: ', error);
        }
      );
  }

  selectClass(className: string) {
    this.currentClass.next(className);
  }

  hasSpellcasting(): boolean {
    return !!this.classData?.spellcasting;
  }
}
