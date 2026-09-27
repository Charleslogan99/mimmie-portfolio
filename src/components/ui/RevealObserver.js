"use client";
import { useEffect } from "react";
export function RevealObserver() {
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 }); document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  return null;
}
