import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { loginSchema } from "../schemas";

// can't do app.post saperately due to type safety
const app = new Hono().post(
  "/login",
  // THIS IS THE MIDDLEWARE HERE FOR VALIDATION
  // zValidator("json", z.object({
  //   email: z.string().email(),
  //   password: z.string(),
  // })),
  zValidator("json", loginSchema),
  (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });

    return c.json({ email, password });
  }
);

export default app;
