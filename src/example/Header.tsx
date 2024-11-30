// packages/component-library/src/components/Header.tsx

import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Demo</h1>
      <DarkModeToggle />
    </header>
  );
};

Header.displayName = "Header";

export default Header;
