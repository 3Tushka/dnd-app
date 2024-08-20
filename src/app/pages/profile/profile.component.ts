import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs/internal/Observable";
import { Profile } from "./profile.interface";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  isAuthenticated$!: Observable<boolean>;
  userData$!: Observable<Profile | null>;

  constructor(private auth: AuthService) {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
    this.userData$ = this.auth.user$ as Observable<Profile | null>;
  }

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
}
