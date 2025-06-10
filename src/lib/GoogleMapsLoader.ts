// lib/googleMapsLoader.ts
import { Loader } from "@googlemaps/js-api-loader";

export const googleMapsLoader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  version: "weekly",
  libraries: ["places"],
});
