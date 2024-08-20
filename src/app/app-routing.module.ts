import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassesComponent } from "./pages/classes/classes.component";
import { MechanicsComponent } from "./pages/mechanics/mechanics.component";
import { RulesComponent } from "./pages/rules/rules.component";
import { CharacterComponent } from "./pages/character/character.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { FeaturesComponent } from "./pages/features/features.component";
import { MonstersComponent } from "./pages/monsters/monsters.component";
import { RacesComponent } from "./pages/races/races.component";
import { RaceComponent } from "./pages/races/race/race.component";
import { ClassDetailsComponent } from "./pages/classes/class-details/class-details.component";
import { SpellsComponent } from "./pages//spells/spells.component";
import { SpellDetailComponent } from "./pages/spells/spell-detail/spell-detail.component";
import { FeatureComponent } from "./pages/features/feature/feature.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { CreatorComponent } from "./creator/creator.component";
import { MonsterComponent } from "./pages/monsters/monster/monster.component";

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
  { path: "monsters/:id", component: MonsterComponent },
  { path: "races", component: RacesComponent },
  { path: "races/:id", component: RaceComponent },
  { path: "spells", component: SpellsComponent },
  { path: "spells/:id", component: SpellDetailComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "creator", component: CreatorComponent },
  // { path: "api/traits/:name", },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
