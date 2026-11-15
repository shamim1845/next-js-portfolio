import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ProjectProps } from "./projectConstant";

const linkClass =
  "inline-flex h-11 min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-border/40 bg-card/40 px-3 text-muted-foreground shadow-sm transition-[color,background-color,border-color,transform] duration-200 hover:border-brandColor/35 hover:bg-brandColor/5 hover:text-brandColor active:scale-95 dark:bg-zinc-950/20";

/** Source and live links for a project. One size and style everywhere. */
const ProjectLinks = ({ project }: { project: ProjectProps }) => {
  const { frontEnd, backEnd, fullStack } = project.gitHubLinks ?? {};
  // With two repositories the icons alone are identical, so label them.
  const split = Boolean(frontEnd && backEnd);

  const links = [
    frontEnd && {
      href: frontEnd,
      tip: "Front-End Code",
      label: `${project.name} front-end code on GitHub`,
      text: split ? "Front-end" : null,
      icon: <Github className="h-4 w-4" aria-hidden="true" />,
    },
    backEnd && {
      href: backEnd,
      tip: "Back-End Code",
      label: `${project.name} back-end code on GitHub`,
      text: split ? "Back-end" : null,
      icon: <Github className="h-4 w-4" aria-hidden="true" />,
    },
    fullStack && {
      href: fullStack,
      tip: "Source Code",
      label: `${project.name} source code on GitHub`,
      text: null,
      icon: <Github className="h-4 w-4" aria-hidden="true" />,
    },
    project.liveLink && {
      href: project.liveLink,
      tip: "Live Demo",
      label: `${project.name} live demo`,
      text: null,
      icon: <ExternalLink className="h-4 w-4" aria-hidden="true" />,
    },
  ].filter(Boolean) as {
    href: string;
    tip: string;
    label: string;
    text: string | null;
    icon: React.ReactNode;
  }[];

  return (
    <TooltipProvider>
      {links.map((link) => (
        <Tooltip key={link.href}>
          <TooltipTrigger asChild>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in a new tab)`}
              className={linkClass}
            >
              {link.icon}
              {link.text && (
                <span className="font-code text-xs font-semibold">
                  {link.text}
                </span>
              )}
            </a>
          </TooltipTrigger>
          <TooltipContent className="font-code text-xs">
            <p>{link.tip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
};

export default ProjectLinks;
