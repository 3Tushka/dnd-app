import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export function fetchApi<T>(
  http: HttpClient,
  baseUrl: string,
  endpoint: string,
  name: string
): Observable<T> {
  const apiUrl = `${baseUrl}${endpoint}/${name}`;
  return http.get<T>(apiUrl);
}

export function selectNameByLink(url: string) {
  const cleanedUrl = url.replace(/^api\//, "");
  const lastSegment = cleanedUrl.split("/").pop() || "";
  const decoded = decodeURIComponent(lastSegment);
  const formatted = decoded.replace(/\s+/g, "-").toLowerCase();
  console.log("Formatted:", formatted);

  return formatted;
}

export function onClickGoToDetails(router: Router, path: string, id: string) {
  router.navigate([path, id]);
}
