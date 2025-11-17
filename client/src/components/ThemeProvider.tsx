import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Guard against SSR and test environments
    if (typeof window === "undefined") {
      return defaultTheme;
    }
    
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      return stored || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    // Guard against SSR and test environments
    if (typeof window === "undefined") return;
    
    try {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to persist theme:", error);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
