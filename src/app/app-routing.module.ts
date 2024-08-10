import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassesComponent } from "./classes/classes.component";
import { MechanicsComponent } from "./mechanics/mechanics.component";
import { RulesComponent } from "./rules/rules.component";
import { CharacterComponent } from "./character/character.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { FeaturesComponent } from "./features/features.component";
import { MonstersComponent } from "./monsters/monsters.component";
import { RacesComponent } from "./races/races.component";
import { RaceComponent } from "./races/race/race.component";
import { ClassDetailsComponent } from "./classes/class-details/class-details.component";
import { SpellsComponent } from "./spells/spells.component";
import { SpellDetailComponent } from "./spells/spell-detail/spell-detail.component";
import { FeatureComponent } from "./features/feature/feature.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "classes", component: ClassesComponent },
  { path: "classes/:id", component: ClassDetailsComponent },
  { path: "mechanics", component: MechanicsComponent },
  { path: "rules", component: RulesComponent },
  { path: "character", component: CharacterComponent },
  { path: "equipment", component: EquipmentComponent },
  { path: "features", component: FeaturesComponent },
  { path: "features/:id", component: FeatureComponent },
  { path: "monsters", component: MonstersComponent },
  { path: "races", component: RacesComponent },
  { path: "races/:id", component: RaceComponent },
  { path: "spells", component: SpellsComponent },
  { path: "spells/:id", component: SpellDetailComponent },
  { path: "profile", component: ProfileComponent },
  // { path: "api/traits/:name", },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
