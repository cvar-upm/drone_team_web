/** Prefix a site path ("/members", "/competitions/IMAV#2022") with the deploy base ("/drone_team_web"). */
export function url(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
