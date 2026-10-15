"use client";

import * as React from "react";

export function CurrentYear() {
  const [year, setYear] = React.useState<number>(2025);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}