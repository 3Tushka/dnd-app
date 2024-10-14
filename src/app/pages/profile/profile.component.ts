import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs/internal/Observable";
import { CreatorData, Profile } from "./profile.interface";
import { HttpClient } from "@angular/common/http";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  isAuthenticated$!: Observable<boolean>;
  userData$!: Observable<Profile | null>;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private profileService: ProfileService
  ) {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
    this.userData$ = this.auth.user$ as Observable<Profile | null>;
  }

  characterData?: CreatorData | null;
  characterDataArray?: CreatorData[] = [];

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        console.log("User is authenticated");
        this.userData$.subscribe((user) => {
          console.log("User data is: ", user);
        });
      } else {
        console.log("User is not authenticated");
      }
    });
  }

  retrieveFormDataFromServer(id: number): void {
    this.profileService.retrieveFormDataFromServer(id).subscribe(
      (response: any) => {
        this.characterData = response;
        console.log("Form data retrieved successfully:", response);
      },
      (error) => {
        console.error("Error retrieving form data:", error);
      }
    );
  }

  getAllCharacters(): void {
    this.profileService.getAllCharacters().subscribe(
      (response: any) => {
        this.characterDataArray = response;
        console.log("Characters retrieved successfully:", response);
      },
      (error) => {
        console.error("Error retrieving characters:", error);
      }
    );
  }
}
