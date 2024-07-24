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

export function selectNameByLink(url: string): void {
  const lastSegment = url.split("/").pop() || "";
  const decoded = decodeURIComponent(lastSegment);
  const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
  console.log("Formatted Link: ", formatted);
}
