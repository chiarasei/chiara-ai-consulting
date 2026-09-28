import { ArrowUpRight } from "lucide-react";

interface ProjectBrowserProps {
  src: string;
  alt: string;
  href: string;
  domain: string;
  priority?: boolean;
}

const ProjectBrowser = ({ src, alt, href, domain, priority = false }: ProjectBrowserProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${domain}`}
    className="group/browser block overflow-hidden rounded-md border border-border bg-card shadow-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    <div className="flex h-10 items-center gap-3 border-b border-border bg-secondary/70 px-4">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      </span>
      <span className="min-w-0 flex-1 truncate text-center text-[11px] text-muted-foreground">{domain}</span>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover/browser:-translate-y-0.5 group-hover/browser:translate-x-0.5 group-hover/browser:text-accent" />
    </div>
    <div className="aspect-[16/10] overflow-hidden bg-muted">
      <img
        src={src}
        alt={alt}
        width={1280}
        height={800}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/browser:scale-[1.015]"
      />
    </div>
  </a>
);

export default ProjectBrowser;