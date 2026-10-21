import { Component, ErrorInfo, ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CHUNK_ERROR_PATTERN =
  /loading chunk|dynamically imported module|importing a module script failed|failed to fetch/i;

const RELOAD_FLAG = "chiara-chunk-reload";

interface ErrorBoundaryProps {
  children: ReactNode;
  title: string;
  message: string;
  reloadLabel: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundaryInner extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Page error:", error, info);

    // After a new publish, an open tab can reference code files that no
    // longer exist. Reload once automatically to fetch the fresh version.
    if (CHUNK_ERROR_PATTERN.test(error?.message ?? "")) {
      try {
        if (!sessionStorage.getItem(RELOAD_FLAG)) {
          sessionStorage.setItem(RELOAD_FLAG, "1");
          window.location.reload();
          return;
        }
      } catch {
        // sessionStorage unavailable, fall through to the message
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
          <h1 className="text-3xl text-foreground md:text-4xl">{this.props.title}</h1>
          <p className="mt-4 max-w-md text-muted-foreground">{this.props.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 inline-flex h-12 items-center rounded-none bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {this.props.reloadLabel}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();
  const sv = language === "sv";
  return (
    <ErrorBoundaryInner
      title={sv ? "Något gick fel" : "Something went wrong"}
      message={
        sv
          ? "Sidan kunde inte visas. Det händer ibland efter en uppdatering. Ladda om sidan så brukar det lösa sig."
          : "The page could not be displayed. This can happen after an update. Reloading usually fixes it."
      }
      reloadLabel={sv ? "Ladda om" : "Reload"}
    >
      {children}
    </ErrorBoundaryInner>
  );
};

export default ErrorBoundary;
