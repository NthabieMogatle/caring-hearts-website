"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { LogoMark } from "./Logo";

type SafeImageProps = ImageProps;

/**
 * Drop-in replacement for next/image that swaps the raster for a soft
 * tan/gold panel (with a discreet logo mark) if the underlying source fails
 * to load. Prevents the browser's broken-image icon from ever appearing —
 * the layout stays intact and the placeholder reads as intentional.
 *
 * All images on this site use `fill`, so the fallback positions itself with
 * absolute / inset-0 to occupy the parent's aspect-ratio box.
 */
export function SafeImage(props: SafeImageProps) {
  const [errored, setErrored] = useState(false);
  const { alt, className, fill, ...rest } = props;

  if (errored) {
    const labelProps =
      typeof alt === "string" && alt.length > 0
        ? { role: "img" as const, "aria-label": alt }
        : { "aria-hidden": true as const };

    return (
      <div
        {...labelProps}
        className={[
          fill ? "absolute inset-0" : "",
          "flex items-center justify-center",
          "bg-gradient-to-br from-cream via-gold/15 to-gold/35",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <LogoMark className="h-1/5 w-1/5 max-h-16 max-w-16 opacity-40" />
      </div>
    );
  }

  return (
    <Image
      {...rest}
      alt={alt}
      fill={fill}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
