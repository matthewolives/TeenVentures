export const LUMA_CALENDAR_URL = "https://lu.ma/ah-tv";
const CALENDAR_ID = "cal-9Cf7KMxCZQzNAHk";

export type CalendarEvent = {
  id: string;
  name: string;
  image: string;
  href: string;
  startAt: string;
  date: string;
  location: string;
};

type PublicEvent = {
  api_id?: string;
  name?: string;
  start_at?: string;
  url?: string;
  cover_url?: string;
  visibility?: string;
  location_type?: string;
  geo_address_info?: { city_state?: string; city?: string };
};

export function normalizeEvents(entries: { event?: PublicEvent; status?: string }[], now = Date.now()): CalendarEvent[] {
  const events = new Map<string, CalendarEvent>();
  for (const { event, status } of entries) {
    if (!event || (status && status !== "approved") || event.visibility !== "public") continue;
    const { api_id: id, name, start_at: startAt, url } = event;
    if (!id || !name || !startAt || !url || !Number.isFinite(Date.parse(startAt)) || Date.parse(startAt) <= now) continue;
    const href = new URL(url, "https://lu.ma/");
    if (href.protocol !== "https:" || !["lu.ma", "luma.com"].includes(href.hostname)) continue;
    const image = event.cover_url?.startsWith("https://") ? event.cover_url : "/soon.png";
    events.set(id, {
      id, name, image, href: href.href, startAt,
      date: new Intl.DateTimeFormat("it-IT", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Rome" }).format(new Date(startAt)),
      location: event.location_type === "meet" ? "Google Meet" : event.location_type === "offline" ? event.geo_address_info?.city_state || event.geo_address_info?.city || "In presenza" : "Online",
    });
  }
  return [...events.values()].sort((a, b) => Date.parse(a.startAt) - Date.parse(b.startAt));
}

// Public endpoint used by Luma's calendar. No API key is needed. This is not
// their supported paid API, so schema/network failures must stay non-fatal.
export async function fetchUpcomingEvents(): Promise<{ events: CalendarEvent[]; unavailable: boolean }> {
  try {
    const entries: { event?: PublicEvent; status?: string }[] = [];
    const cursors = new Set<string>();
    let cursor: string | undefined;
    do {
      const url = new URL("https://api.lu.ma/calendar/get-items");
      url.search = new URLSearchParams({ calendar_api_id: CALENDAR_ID, period: "future", pagination_limit: "100", ...(cursor ? { pagination_cursor: cursor } : {}) }).toString();
      const response = await fetch(url, { next: { revalidate: 300 }, signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`Luma responded ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data.entries)) throw new Error("Invalid Luma calendar response");
      entries.push(...data.entries);
      if (!data.has_more) break;
      cursor = data.next_cursor;
      if (!cursor || cursors.has(cursor) || cursors.size >= 100) throw new Error("Invalid Luma pagination");
      cursors.add(cursor);
    } while (cursor);
    return { events: normalizeEvents(entries), unavailable: false };
  } catch (error) {
    console.error("Unable to load Luma calendar:", error);
    return { events: [], unavailable: true };
  }
}
