export type BookingType = "Package" | "Hotel" | "Car" | "General";

/**
 * Build a link to the dedicated booking page, carrying the selected
 * booking type and item as query params so the form can pre-fill them.
 */
export function bookingHref(type: BookingType = "General", item = ""): string {
  const params = new URLSearchParams();
  params.set("type", type);
  if (item) params.set("item", item);
  return `/book?${params.toString()}`;
}
