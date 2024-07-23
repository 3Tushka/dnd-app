import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassesComponent } from "./classes/classes.component";
import { MechanicsComponent } from "./mechanics/mechanics.component";
import { RulesComponent } from "./rules/rules.component";
import { CharacterComponent } from "./character/character.component";
import { EquipmentComponent } from "./equipment/equipment.component";

const routes: Routes = [
  { path: "classes", component: ClassesComponent },
  { path: "mechanics", component: MechanicsComponent },
  { path: "rules", component: RulesComponent },
  { path: "character", component: CharacterComponent },
  { path: "equipment", component: EquipmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
