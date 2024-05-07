import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { jobs } from "./types/Job";

const jobSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  description: z.string(),
  location: z.string(),
  salary: z.string(),
  company: z.object({
    name: z.string(),
    description: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
  }),
});

const createJobSchema = jobSchema.omit({ id: true });
type Job = z.infer<typeof jobSchema>;

export const jobsRoute = new Hono()
  .get("/:id{[0-9]+}", (c) => {
    try {
      const jobId = c.req.param("id");
      const job: Job | undefined = jobs.find((j) => j.id === Number(jobId));

      const a = 2 / 1;
      if (a === Infinity) {
        throw new Error("a is infinity");
      }
      if (job) {
        return c.json(job);
      } else {
        return c.json({ message: "Job not found" }, 404);
      }
    } catch (error) {
      console.error(error);
      return c.json({ message: "Internal server error" }, 500);
    }
  })
  .get("/", async (c) => {
    return c.json(jobs);
  })
  .post("/", zValidator("json", createJobSchema), async (c) => {
    const newJob = c.req.valid("json");
    jobs.push({ ...newJob, id: jobs.length + 1 });
    c.status(201);
    return c.json({ newJob });
  })
  .delete("/:id{[0-9]+}", (c) => {
    const jobId = c.req.param("id");
    const index = jobs.findIndex((j) => j.id === Number(jobId));
    if (index !== -1) {
      jobs.splice(index, 1);
      return c.json({ message: "Job deleted successfully" });
    } else {
      return c.json({ message: "Job not found" }, 404);
    }
  })
  .put("/:id{[0-9]+}", zValidator("json", jobSchema), (c) => {
    const jobId = c.req.param("id");
    const updatedJob = c.req.valid("json");
    const index = jobs.findIndex((j) => j.id === Number(jobId));
    if (index !== -1) {
      jobs[index] = { ...updatedJob, id: Number(jobId) };
      return c.json({ message: "Job updated successfully" });
    } else {
      return c.json({ message: "Job not found" }, 404);
    }
  });
