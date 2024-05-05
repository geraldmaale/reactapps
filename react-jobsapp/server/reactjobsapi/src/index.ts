import { Hono } from "hono";
import { logger } from "hono/logger";
import { jobsRoute } from "./jobEndpoints";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", logger());
app.use(cors()); // Use cors middleware to allow cross-origin requests

app.get("/", (c) => {
  return c.json({ message: "Welcome to the Jobs API" });
});
app.route("api/jobs", jobsRoute);
export default {
  fetch: app.fetch,
};
