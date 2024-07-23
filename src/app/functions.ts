import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export function fetchApi<T>(
  http: HttpClient,
  baseUrl: string,
  endpoint: string,
  name: string
): Observable<T> {
  const apiUrl = `${baseUrl}${endpoint}/${name}`;
  return http.get<T>(apiUrl);
}
