import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class VoiceCallErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Voice call error boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            Voice call encountered an error.
          </p>
          <Button
            onClick={() => this.setState({ hasError: false })}
            variant="outline"
            className="gap-2"
          >
            <Phone size={16} />
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default VoiceCallErrorBoundary;
