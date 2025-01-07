import { Hono } from "hono";

const app = new Hono().post("/login", (c) => {
  return c.json({ atru: "success" });
});

export default app;
