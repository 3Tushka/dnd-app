import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClassesComponent } from "./pages/classes/classes.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ClassesLvlComponent } from "./pages/classes/classes-lvl/classes-lvl.component";
import { FormsModule } from "@angular/forms";
import { MechanicsComponent } from "./pages/mechanics/mechanics.component";
import { RulesComponent } from "./pages/rules/rules.component";
import { CharacterComponent } from "./pages/character/character.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarItemComponent } from "./navbar/navbar-item/navbar-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { FeaturesComponent } from "./pages/features/features.component";
import { FeatureComponent } from "./pages/features/feature/feature.component";
import { MonstersComponent } from "./pages/monsters/monsters.component";
import { MonsterComponent } from "./pages/monsters/monster/monster.component";
import { RacesComponent } from "./pages/races/races.component";
import { RaceComponent } from "./pages/races/race/race.component";
import { ClassDetailsComponent } from "./pages/classes/class-details/class-details.component";
import { SpellsComponent } from "./pages/spells/spells.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { SpellDetailComponent } from "./pages/spells/spell-detail/spell-detail.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { StatsComponent } from "./pages/spells/spell-detail/stats/stats.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LazyLoadBackgroundDirective } from "./sharing/lazy-loading";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { ProfileComponent } from "./pages/profile/profile.component";
import { CreatorComponent } from "./creator/creator.component";
import { environment } from "./environments/environments";

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
    ClassDetailsComponent,
    SpellsComponent,
    SpellDetailComponent,
    StatsComponent,
    HomepageComponent,
    LazyLoadBackgroundDirective,
    ProfileComponent,
    CreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.redirectUri,
      },
      httpInterceptor: {
        allowedList: ["http://localhost:3000/*"],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
