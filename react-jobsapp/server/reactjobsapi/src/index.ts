import { Hono } from "hono";
import { logger } from "hono/logger";
import { jobsRoute } from "./jobEndpoints";

const app = new Hono();

app.use("*", logger());

// Enable CORS for Cloudflare
// app.use("*", async (c) => {
//   logger();
//   c.res.headers.set("Access-Control-Allow-Origin", "*");
//   c.res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   c.res.headers.set("Access-Control-Allow-Headers", "Content-Type");
// });

app.get("/", (c) => {
  return c.json({ message: "Welcome to the Jobs API" });
});

app.route("api/jobs", jobsRoute);

export default {
  fetch: app.fetch,
};
