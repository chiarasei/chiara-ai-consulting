import { describe, expect, it } from "vitest";
import { ENQUIRY_RETENTION_MONTHS } from "./privacy";

describe("enquiry retention policy", () => {
  it("uses the agreed 12 month retention period", () => {
    expect(ENQUIRY_RETENTION_MONTHS).toBe(12);
  });
});