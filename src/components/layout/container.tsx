import type React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 ${className}`}
      {...props}
    />
  );
}
