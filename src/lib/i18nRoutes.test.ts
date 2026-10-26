import { describe, it, expect } from "vitest";
import { detectLanguage, localizePath, stripLang, switchLanguagePath, langFromPath } from "./i18nRoutes";

describe("language addresses", () => {
  it("uses the requested privacy addresses in both languages", () => {
    expect(localizePath("en", "/privacy")).toBe("/en/privacy");
    expect(localizePath("sv", "/privacy")).toBe("/sv/integritetspolicy");
  });
  it("switches between the translated privacy addresses", () => {
    expect(switchLanguagePath("/en/privacy", "sv")).toBe("/sv/integritetspolicy");
    expect(switchLanguagePath("/sv/integritetspolicy", "en")).toBe("/en/privacy");
  });
  it("sends Swedish browsers to Swedish", () => {
    expect(detectLanguage(["sv-SE", "en"])).toBe("sv");
  });
  it("sends everyone else to English", () => {
    expect(detectLanguage(["de-DE", "en-GB"])).toBe("en");
  });
  it("builds prefixed paths", () => {
    expect(localizePath("sv", "/")).toBe("/sv");
    expect(localizePath("en", "/contact")).toBe("/en/contact");
  });
  it("switch keeps the same page", () => {
    expect(switchLanguagePath("/en/pricing", "sv")).toBe("/sv/pricing");
    expect(switchLanguagePath("/sv", "en")).toBe("/en");
  });
  it("reads and strips the prefix", () => {
    expect(langFromPath("/sv/services")).toBe("sv");
    expect(langFromPath("/services")).toBeNull();
    expect(stripLang("/sv/services")).toBe("/services");
  });
});
