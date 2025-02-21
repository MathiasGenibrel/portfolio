import React, { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const baseClassName =
  "font-heading xs:text-6xl flex w-full flex-col items-end text-4xl md:text-8xl xl:text-9xl text-stone-900";

const Heading: React.FC<HeadingProps> & {
  Primary: React.FC<HeadingProps>;
  Secondary: React.FC<HeadingProps>;
  Tertiary: React.FC<HeadingProps>;
  Quaternary: React.FC<HeadingProps>;
} = ({ children, className = "" }) => {
  return <h1 className={clsx(baseClassName, className)}>{children}</h1>;
};

Heading.Primary = ({ children, className = "" }) => (
  <h1 className={clsx(baseClassName, className)}>{children}</h1>
);

Heading.Secondary = ({ children, className = "" }) => (
  <h2 className={clsx("font-display text-3xl leading-10 font-bold", className)}>
    {children}
  </h2>
);

Heading.Tertiary = ({ children, className = "" }) => (
  <h3 className={clsx("font-display text-2xl font-medium", className)}>
    {children}
  </h3>
);

Heading.Quaternary = ({ children, className = "" }) => (
  <h4 className={clsx("font-display text-xl font-medium", className)}>
    {children}
  </h4>
);

export default Heading;
