import { describe, expect, it } from "vitest";
import { WEB_APP_STARTING_PRICE_KR } from "./pricing";

describe("project pricing", () => {
  it("starts Web App projects at 25,000 kr", () => {
    expect(WEB_APP_STARTING_PRICE_KR).toBe(25_000);
  });
});