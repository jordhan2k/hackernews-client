"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function PortalWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted || typeof window === "undefined") return null;
  const portalRoot = document.getElementById("portal-root");

  return portalRoot ? createPortal(children, portalRoot) : null;
}
