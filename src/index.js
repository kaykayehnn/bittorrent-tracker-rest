import createApi from "./api.js";
import createTracker from "./tracker.js";

main();

export default function main() {
  const trackerPort = process.env.TRACKER_PORT || "6969";
  const apiPort = process.env.API_PORT || "8080";

  const tracker = createTracker({
    port: trackerPort,
  });

  const app = createApi({
    port: apiPort,
    tracker,
  });

  return { tracker, app };
}
