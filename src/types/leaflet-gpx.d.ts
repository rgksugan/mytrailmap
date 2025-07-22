import * as L from "leaflet";

declare module "leaflet" {
  class GPX extends FeatureGroup {
    constructor(gpx: string, options?: any);
  }

  function gpx(gpx: string, options?: any): GPX;
}
