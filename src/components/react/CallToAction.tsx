import { clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  heading: string;
  description: string | null;
  align?: "content" | "wide";
  className?: string;
};

const Heading = ({
  children,
  Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  Tag?: React.ElementType;
  className?: string;
}) => {
  const styles = twMerge(clsx("text-4xl font-bold", className));

  return <Tag className={styles}>{children}</Tag>;
};

const CallToAction = ({
  heading,
  description,
  align = "content",
  className,
}: Props) => {
  const baseStyles = "bg-surface rounded-xl p-8 space-y-4";

  const alignStyles = {
    content: "content",
    wide: "breakout",
  };

  const styles = twMerge(clsx(baseStyles, alignStyles[align], className));

  return (
    <div className={styles}>
      <Heading>{heading}</Heading>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default CallToAction;
