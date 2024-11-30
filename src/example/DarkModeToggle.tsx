// packages/component-library/src/components/DarkModeToggle.tsx

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Using lucide-react for consistent icons
import { cn } from "@/lib/utils"; // Ensure you have a utility for classNames

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // On component mount, check for saved user preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // If no saved preference, use system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200",
        "bg-gray-100 dark:bg-gray-700",
        "hover:bg-gray-200 dark:hover:bg-gray-600"
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // Sun Icon for Light Mode
        <Sun className="h-5 w-5 text-yellow-500" aria-hidden="true" />
      ) : (
        // Moon Icon for Dark Mode
        <Moon
          className="h-5 w-5 text-gray-900 dark:text-gray-200"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

DarkModeToggle.displayName = "DarkModeToggle";

export default DarkModeToggle;
