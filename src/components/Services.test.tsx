import { describe, expect, it } from "vitest";
import { getServiceContent, normalizeServiceContent } from "./Services";

describe("Services content safety", () => {
  for (const language of ["en", "sv"]) {
    it(`provides all four bullet arrays and the Business Tools example in ${language}`, () => {
      const { cards } = getServiceContent(language);
      expect(cards).toHaveLength(4);
      expect(cards.map((card) => card.bullets.length)).toEqual([5, 5, 4, 5]);
      expect(cards.every((card) => Array.isArray(card.bullets) && card.bullets.every((bullet) => typeof bullet === "string"))).toBe(true);
      expect(typeof cards[2].example).toBe("string");
      expect(cards[2].example?.length).toBeGreaterThan(0);
    });
  }

  it.each([undefined, null, "not an array", {}])("falls back when a bullet list is invalid: %j", (bullets) => {
    const result = normalizeServiceContent({ cards: [{ bullets }] });
    expect(result.cards[0].bullets).toEqual(getServiceContent("en").cards[0].bullets);
  });

  it("filters invalid entries while preserving a deliberately empty array", () => {
    const result = normalizeServiceContent({ cards: [{ bullets: [null, {}, 5, "", " ", "Valid point"] }, { bullets: [] }] });
    expect(result.cards[0].bullets).toEqual(["Valid point"]);
    expect(result.cards[1].bullets).toEqual([]);
  });

  it.each([undefined, null, {}, { cards: "invalid" }, { cards: [null] }])("handles missing or malformed card content: %j", (value) => {
    expect(normalizeServiceContent(value)).toEqual(getServiceContent("en"));
  });

  it("falls back for missing descriptions, example text and unknown languages", () => {
    const result = normalizeServiceContent({ cards: [{ description: "" }, {}, { example: null }] });
    const fallback = getServiceContent("en");
    expect(result.cards[0].description).toEqual(fallback.cards[0].description);
    expect(result.cards[2].example).toEqual(fallback.cards[2].example);
    expect(getServiceContent("unknown")).toEqual(fallback);
  });
});