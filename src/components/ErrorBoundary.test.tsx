import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ErrorBoundary from "./ErrorBoundary";
import { LanguageProvider } from "@/contexts/LanguageContext";

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("Page error diagnostics", () => {
  it("logs the original error message and stacks when showing the fallback", () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const error = new Error("Services regression diagnostic");
    const BrokenPage = () => { throw error; };
    render(<LanguageProvider><ErrorBoundary><BrokenPage /></ErrorBoundary></LanguageProvider>);
    expect(log).toHaveBeenCalledWith("Page error:", error.message, expect.objectContaining({
      name: "Error",
      path: window.location.pathname,
      stack: error.stack,
      componentStack: expect.stringContaining("BrokenPage"),
    }));
    expect(screen.getByRole("button", { name: "Reload" })).toBeDefined();
  });
});