"use client"

import type React from "react"
import { useEffect } from "react"

export function useOutsideClick(ref: React.RefObject<HTMLDivElement | null>, callback: () => void) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  }