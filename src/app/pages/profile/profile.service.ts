import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private apiUrl = "http://localhost:3000/character";

  constructor(private http: HttpClient, private auth: AuthService) {}

  getAllCharacters(): Observable<any> {
    return this.auth.idTokenClaims$.pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set(
            "Authorization",
            `Bearer ${token.__raw}`
          );
          return this.http.get(`${this.apiUrl}`, { headers });
        } else {
          throw new Error("Error retrieving access token.");
        }
      })
    );
  }
  // Change ANY to interface, but when done

  retrieveFormDataFromServer(id: number): Observable<any> {
    return this.auth.idTokenClaims$.pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set(
            "Authorization",
            `Bearer ${token.__raw}`
          );
          console.log("Access token retrieved successfully:", token.__raw);
          return this.http.get(`${this.apiUrl}/${id}`, { headers });
        } else {
          throw new Error("Error retrieving access token.");
        }
      })
    );
  }
}
