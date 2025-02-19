import { FC } from "react";

interface ExternalLinkProps {
  href: string;
  children: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={"font-medium text-blue-500 hover:underline"}
  >
    {children}
    <span className={"text-xs"}>_↗</span>
  </a>
);
