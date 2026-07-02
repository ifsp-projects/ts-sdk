import type { ZodError } from "zod";

export const ZodErrorFormatter = (err: ZodError) => {
  return err.issues.map((e) => ({
    path: e.path.join("."),
    message: e.message,
  }));
};
