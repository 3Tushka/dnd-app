import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClassesComponent } from "./classes/classes.component";
import { HttpClientModule } from "@angular/common/http";
import { ClassesLvlComponent } from "./classes/classes-lvl/classes-lvl.component";
import { FormsModule } from "@angular/forms";
import { MechanicsComponent } from "./mechanics/mechanics.component";
import { RulesComponent } from "./rules/rules.component";
import { CharacterComponent } from "./character/character.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarItemComponent } from "./navbar/navbar-item/navbar-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { EquipmentComponent } from './equipment/equipment.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature/feature.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterComponent } from './monsters/monster/monster.component';
import { RacesComponent } from './races/races.component';
import { RaceComponent } from './races/race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ClassesLvlComponent,
    MechanicsComponent,
    RulesComponent,
    CharacterComponent,
    NavbarComponent,
    NavbarItemComponent,
    EquipmentComponent,
    FeaturesComponent,
    FeatureComponent,
    MonstersComponent,
    MonsterComponent,
    RacesComponent,
    RaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
