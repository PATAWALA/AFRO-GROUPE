"use client";

import Image, { type ImageProps } from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackGradient?: string;
  containerClassName?: string;
}

/**
 * Image Next.js avec fallback gradient élégant si l'image est manquante.
 */
export function ImageWithFallback({
  src,
  alt,
  fallbackGradient = "from-ag-navy-800 to-ag-blue-500",
  className,
  containerClassName,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br",
          fallbackGradient,
          containerClassName,
          className
        )}
      >
        <span className="text-white/30 text-xs font-medium uppercase tracking-wider">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
      {...props}
    />
  );
}