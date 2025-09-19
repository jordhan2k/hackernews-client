"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export function PortalWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted || typeof window === "undefined") return null;
  const portalRoot = document.getElementById("portal-root");

  return portalRoot ? createPortal(children, portalRoot) : null;
}
