import { useEffect, useState } from "react";

export const useScrolled = ({ threshold = 0, initial = false }) => {
  const [scrolled, setScrolled] = useState(initial);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setScrolled(window.scrollY > threshold);

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, mounted };
};